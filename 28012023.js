const Koa= require('koa');
const Next=require('next'); // next framework creates customized server
const Router=require('koa-router');
const bodyParser=require('koa-bodyparser');
const axios=require('axios');
const Pusher=require('pusher');
const db=require('./db/mongodb');

const port=parseInt(process.env.Port,10) || 3000;
const dev=process.env.NODE_ENV!=='production';
const app=Next({dev});
const handle=app.getRequestHandler();

if(dev){
    require('dotenv').config();
}

const{
    NEXMO_API_KEY,
    NEXMO_API_SECRET,
    PUSHER_APP_ID,
    PUSHER_APP_KEY,
    PUSHER_APP_SECRET,
    PUSHER_APP_CLUSTER,
    DEMO_MODE,
    INBOUND_PHONE_NUMBER
} =process.env; // define a object for process.env

var pusher=new Pusher({
    appId:PUSHER_APP_ID,
    key:PUSHER_APP_KEY,
    secret:PUSHER_APP_SECRET,
    cluster:PUSHER_APP_CLUSTER,
    useTLS:true
});

app.prepare().then(()=>{
    const server=new Koa();
    const router=new Router();

    server.use(bodyParser());


    const getInsight=async number =>{
        const insightRequest=await axios.get(
            `https://api.nexmo.com/ni/advanced/json?api_key=${NEXMO_API_KEY}&api_secret=${NEXMO_API_SECRET}&number=${number}`
        );

        return insightRequest.data;
    };

    const routes={
        index: async ctx=>{
            await app.render(ctx.req,ctx.res,'/index',ctx.query);
            ctx.respond=false;
        },
        star:async ctx=>{
            await handle(ctx.req,ctx.res);
            ctx.respond=false;
        },
        inbound: async ctx=>{
            const number=(await ctx.request.body.msisdn)||(await ctx.request.body.number);

            const insight=await getInsight(number);
            const result= await db.storeInsight(insight);
            if(typeof result!=='undefined'){
                pusher.trigger('updates','new-insight-added',{
                    insightId:`${result}`
                });
                console.log(`Successfully stored insight as ${result}`);
                ctx.status=200;
            }
        },
        getCountryAggregation: async ctx =>{
            const records=await db.aggregateCountries();
            ctx.body=records;
        },
        getCarrierAggregation: async ctx =>{
            const records=await db.aggregateCarriers();
            ctx.body=records;
        },
        getPricingAggregation: async ctx =>{
            const records=await db.aggregatePricing();
            ctx.body=records;
        },
        checkForDemoMode: async ctx =>{
            if(DEMO_MODE){
                ctx.body={demoMode:true,number:INBOUND_PHONE_NUMBER};
            } else{
                ctx.body={demoMode:false};
            }
        }
    };



    router.get('/',routes.index);
    router.post('/inbound',routes.inbound);
    router.get('/countries',routes.getCountryAggregation);
    router.get('/carriers',routes.getCarrierAggregation);
    router.get('/cost',routes.getPricingAggregation);
    router.get('/demo',routes.checkForDemoMode);
    router.get('*',routes.star);

    server.use(router.routes());
    server.use(async(ctx,next)=>{
        ctx.res.statusCode=200;
        await next();
    });

    server.listen(port,()=>{
        console.log(`Ready on port: https://localhost:${port}`);
    });
});


const db={
    storeInsight:async insightObject =>{
        const newInsightObject=new Insight(insightObject);
        const result=await newInsightObject.save();
        return result._id;
    },
    aggregateCountries:async()=>{
        try{
            const records=await Insight.aggregate([
                {
                    $group:{
                        _id:'$country_code',
                        count:{$sum:1}
                    }
                },
                {$sort:{count:-1}},
                {
                    $project:{
                        country_code:'$_id',
                        country_name:true,
                        count:1,
                        _id:0
                    }
                }
            ]);
            return records;
        } catch(err){
            return err;
        }
    },
    aggregateCarriers: async ()=>{
        try{
            const records=await Insight.aggregate([
            {
                $group:{
                    _id:'$current_carrier.name',
                    count:{$sum:1}
                }
            },
                {$sort:{count:-1}},
                {
                    $project:{
                            carrier:'$_id',
                            count:1,
                            _id:0
                    }
                }
            ]);

            return records;
        } catch(err){
            return err;
        }
    }
};