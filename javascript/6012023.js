const express= require('express');
const path=require('path');
const app=express();
const bodyParser=require('body-parser');

const port=process.env.PORT || 3000;

//MIDDLEWARES
// form data middleware
app.use(bodyParser.urlencoded({
    extended:false
}))

//Json Body Middleware
app.use(bodyParser.json());

//Middleware for static files-asserts
app.use(express.static(path.join(_dirname,'assets')))

//Landing Page Route
app.get('/',(req,res)=>{
    res.sendFile('index.html',{root:path.join(_dirname,'./files')});
});

//Routes for Projects
app.use('/netflix-clone',require('./routes/netflixCloneRoutes'));
app.use('/coffee',require('./routes/coffeeRoutes'));
app.use('/form',require('./routes/formRoutes'));
app.use('/tictactoe',require('./routes/tictactoeRoutes'));

//
app.listen(port,()=>console.log(`Server started on port http://localhost:${port}`))



// netFlexCloneRoute.js
const router=require('express').Router();
const path=require('path');
const { resolve } = require('path');

router.get('/',(req,res)=>{
    res.sendFile('index.html',{root:path.join(_dirname,'../files/netflix-clone')});
})

module.exports=router;

router.get('/brewing',(req,res)=>{
    res.sendFile('brewing.html',{root:path.join(_dirname,'../files/coffee')});
})



//render function
app.get('/about',(req,res)=>{
    res.render('about',{
        title:"self introduction"});
});

app.get('/article/:id',(req,res)=>{
    var entry=blogEngine.getBlogEntry(req.params.id);
    res.render('article',{
        title:entry.tittle;
        blog:entry});
});

app.listen(3000);


// promise practice

const readFilePromise=(file)=>{
    return new Promise((resolve,reject)=>{ // promise constructor
        fs.readFile(file,(err,data)=>{
            if(err) reject('File could not found!');
            resolve(data);
        })
    })
}


const getDogPic=async ()=>{
    try{
        const data=await readFilePromise(`${__dirname}/dog.txt`);
        console.log(`Bread:${data}`);
        const res1=superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`
        )
        const res2=superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`
        )
        const res3=superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`
        )

        const all=await Promise.all([rest1,res2,res3]);
        const imgs=all.map(el=>el.body.message)
        console.log(imgs);
        await writeFilePromise('dog-imag.txt',imgs.join('\n'));
        console.log('Random Dog image save to the file.');
    } catch(err) {
        console.log(err);
        throw err;
    }
}

var isUniform= (num)=>{
    let newArray=num.slice();
    let prevNum=newArray[0];
    for(var i=0;i<newArray.length;i++){
        if(prevNum!==num[i]){
            return console.log(false);
        }
    }
    return console.log(true);
}

var max=(nums) =>{
    var highNum=0;
    nums.forEach(function(element){
        if(highNum<=element){
            highNum=element;
        }
    });
    console.log(highNum);
}