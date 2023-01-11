/*
*
*/

var express= require("express");
const BookController = require("../controllers/BookController");

var router= express.Router();

router.get("/", BookController.bookList);
router.get("/:id", BookController.bookDetail);
routerpost("/", BookController.bookStore);
router.put("/:id", BookController.bookUpdate);
router.delete("/:id", BookController.bookDelete);

module.exports=router;


/**
 * GET home page.
*/
router.get("/",function(req,res){
    res.render("index",{tittle:"Express"});
});

module.exports=router;

/**
 * BookController.js
 * 
 * 
*/
const Book=require("..//models/BookModel");
const {body, validationResult}=require("express-validator");
const {sanitizeBody} = require("express-validator");
const apiResponse= require("..//helpers/apiResponse");
const auth= require("..//middlewares/jwt");
const mongoose= require("mongoose");
mongoose.set("useFindAndModify",false);

var BookData=(data)=>{
    this.id=data._id;
    this.tittle=data.title;
    this.description=data.description;
    this.isbn=data.isbn;
    this.createdAt=data.createdAt;
}

exports.bookList= [
    auth,(req,res)=>{
        try{
            Book.find({user:req.user._id},"_id title description isbn createdAt").then((books)=>
            {
                if(books.length>0){
                    return apiResponse.successResponseWithData(res,"Operation success",books);
                }else{
                    return apiResponse.successResponseWithData(res,"Operation success",[]);
                }
            });
        } catch(err){
            //throw error in json response with status 500
            return apiResponse.ErrorResponse(res,err);
        }
    }
];



exports.bookUpdate=[
    auth,body("title","Title must not beempty.").isLength({min:1}).trim(),
    body("description","Description must not be empty.").isLength({min:1}).trim(),
    body("isbn","IBN must not be empty").isLength({min:1}).trim().custom((value,{req})=>{
        return Book.findOne({isbn:value,user:requestAnimationFrame.user._id,_id:{"$ne":req.params.id}}).then(book=>{
            if(book) {
                return Promise.reject("Book already exists with this ISBN no.");
            }
        });
    }),
    sanitizeBody("*").escape(), // import express-validator
    (req,res)=>{
        try{
            const errors=validationResult(req);
            var book=new Book({
                title:req.body.tittle,
                description:req.body.description,
                isbn: req.body.isbn,
                _id:req.params.id
            });

            if(!errors.isEmpty()){
                return apiResponse.validationErrorWithData(res,"Validation Error.", errors.array());
            }
            else{
                if(!mongoose.Types.ObjectId.isValis(req.params.id)){
                    return apiResponse.validationErrorWithData(res,"Invalid Error.","Invalid ID");
                } else{
                    Book.findByID(req.params.id,function(err,foundBook){
                        if(foundBook===null){
                            return apiResponse.notFoundResponse(res,"Book not exists with this id");
                        }else{
                            if(foundBook.user.toString()!==req.user._id){
                                return apiResponse.unauthorizedResponse(res,"You are not authorized to do this operation.");
                            } else {
                                Book.findByIdAndUpdate(req.params.id, book,{}, function (err){
                                    if(err){
                                        return apiResponse.ErrorResponse(res,err);  
                                    } else{
                                        let bookData=new BookData(book);
                                        return apiResponse.successResponseWithData(res,"Book update Success.",bookData); 
                                  }
                                });
                            }
                        }
                    });
                }
            }
        } catch(err){
            //throw error in json response with status 500
            return apiResponse.ErrorResponse(res,err);
        }
    }
]


/**
 * BookModels.js
 * UserModels.js
*/

var mongoose=require("moongoose");

var Schema=mongoose.Schema;

var BookSchema= new Schema({
    tittle:{type:String,required:true},
    description:{type:String,required:true},
    isbn:{type:String,required:true},
    user:{type:Schema.ObjectId,ref:"User",required:true},
},{timestamps:true});

module.exports=mongoose.model("Book",BookSchema);


var UserSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isConfirmed:{type:Boolean,required:true, default:0},
    confirmOTP:{type:String,required:false},
    otpTries:{type:Number,required:false,default:0},
    status:{type:String,required:true,default:1},
},{timestamps:true});


//Virturl for user's full name

UserSchema
    .virtual("fullName")
    .get(()=>{
        return this.firstName+""+this.lastName;
    });


module.exports=mongoose.model("User",UserSchema);

/**
 * MiddleWare.js
 *  RESAPI authentication problem: JWT 
*/
const jwt=require("express-jwt");
const secret=process.env.Jwt_SECRET;

const authenticate=jwt({
    secret:secret
});

module.exports=authenticate;