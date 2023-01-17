import {Router} from 'express';

import healthcheck from '@components/healthcheck/healthcheck.router'
import user from '@components.user/user.router';

const router : router =router(); // we can define a type

router.use(healthcheck);
router.use(user);

export default router;

const exitHandler =(): void => {
    if(app){
        server.close(()=>{
            logger.info('Server closed');
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler =(error:Error): void => {
    unexpectedErrorHandler.handleError(error);
    if(!unexpectedErrorHandler.isTrustedError(error)){
        exitHandler();
    }
};

process.on('uncaughtException',unexpectedErrorHandler);
process.on('unhandledRejection',(reason: Error)=>{
    throw reason;
});

process.on('SIGTERM',()=>{
    logger.info('SIGTERM received');
    if(server){
        server.close();
    }
});

const app: Application = express();

app.use(httpContext.middleware);
app.use(httpLogger.successHandler);
app.use(httpLogger.errorHandler);
app.use(uniqueReqId);
app.use(espress.json());
app.use(consts.API_ROOT_PATH,api);
app.use(swaggerAipDocs);
app.use(http404);

app.use(errorHandling);

export default app;


/**
 * Validate request according to the defined validation Schema(see)
 * The request body, params or query properties may be checked only.
 * 
*/

const validate=
(schema:ValidationSchema)=>{nnnnn
    (req:Request, res:Response, next: NextFunction)=>{
        const pickObjectKeysWithValue=(Object:object,Keys:string[])=>
        Keys.reduce((o,k)=>((o[k]=Object[k]),o),{});

        const definedSchemaKeys= Object.keys(schema);
        const acceptableSchemaKeys:String[]=['params','query','body'];
        const filterOutNotValidSchemaKeys: string[]=
        Object.keys(schema).filter(
            (k)=>acceptableSchemaKeys.includes(k),
        );
        if(filterOutNotValidSchemaKeys.length!==definedSchemaKeys.length){
            consts e=`Wrongly defined validation Schema keys:
            [${definedSchemaKeys}], allowed keys:[${acceptableSchemaKeys}]`;
            throw new AppError(httpStatus.INTERNAL_SERVER_ERROR,e,false);
        }
        const validSchema=pickObjectKeysWithValue(
            schema,
            filterOutNotValidSchemaKeys;
        );
        const object= pickObjectKeysWithValue(
            schema,
            filterOutNotValidSchemaKeys,
        );
        const object =pickObjectKeysWithValue(req,Object.keys(validSchema));
        const {value ,error}=joi.compile(validSchema)
            .prefs({errors:{label:'key'}})
            .validate(object);


         if(error){
            const errorMessage=error.details
            .map((details)=>details.message)
            .join(',');
            return next(new AppError(httpStatus.BAD_REQUEST),errorMessage);
         } 
         Object.assign(req,value);  
    };

    export default validate;



    const apiKey =(req:Request, res:Response,next:NextFunction)=>{
        let xApiKey:String;
        const token: string=config.xApiKey;
        if(req.headers(x-apix-key)){
            xApiKey=req.header('x-api-key').trim();
        }
        if(!!token&&xApiKey===token.trim()){
            return next();
        }
        logger.error(
            'Missing x-api-key in request header or it does not match with env variable',
        );
        throw new AppError(httpStatus.UNATHURIZED,'Access forbiden');
    };

    export default apiKey;


    const avbLogLevels =[
        'error',
        'warn',
        'info',
        'http',
        'verbose',
        'debug',
        'silly',

    ];


    let currentLogLevel:number =logger.levels[logger.level];

    logger.info(`Logger level is set to ${logger.level}`);


    /**
     * isTrustedError
error:Error :boolean    */
    public isTrustedError(error:Error):boolean {
        if(error instanceof AppError){
            return error.isOperational;
        }
        return false;
    }
}

exprot default new ErrorHandler();


import {Schema} from 'joi';

exprot interface ValidationSchema {
    body?:Schema;
    params?:Schema;
    query?:Schema;
}


try {
    const accessLogStream =fs.createWriteStram(path.join(_dirname,'../log/access.log'),{
        flags:a,
    });
    app.use(morgan('combined',{stream:accessLogStream}));
} catch(err){
    console.log(err);
}
app.use(morgan('combined'));

app.use('/',routes);

app.use(errorHandler);

const port=process.env.PORT||4000;
app.listen(port,()=>{
    console.log(`Server running on port${port}`);
});


(async()=>{
    await dbCreateConnection();
})


router.use(`/v1`,v1);

router.use(pageRoot);
router.use(page404);

export default router;



const router=Router();

router.get('*',(req,res,next)=>{
    return res.status(404).json('404 Not Found');
});

export default router;


const router= Router();

Router.get('/',(req,res,next)=>{
    res.status(200).header('Content-type','text/html').send(`<h4> Restful Api boilerplate</h4>`);
});

export default router;

router.post('/login',[validationLogin],login);
router.post('/register',[validationRegister],register);
router.post('/change-password',[checkJwt,validatorChangePassword],changePassword);


/**
 * ### JWT
 * 
 * JWT_SECRET=
 * JWT_EXPITRATION=15m
 * /