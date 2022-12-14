/**
 * ES5 object creating
 * 
*/

// create objects
var object =new Object();

// create method: creates a new object by passing the protoype object as a parameter
var object=Object.create(null);

// Object literal syntax
var object4 ={
    name:'a',
    gender: "male",
    age: 34
};

// Function constructor
function Person(name){
    this.name=name;
    this.age=age; // age is not defined, this 
}
var objectPerson=new Person("Sudheer");
console.log(objectPerson);


// function constructor with prototype
function Person(){}
Person.prototype.name="Sudheer";
var object=new Person();


//
function func(){}
new func(x,y,z);

var newInstance=Object.create(func.prototype)
var result =func.call(newInstance,x,y,z);
// if the result is a non-null object then use it otherwise just use the new instance.
console.log(result&&typeof result==='object'?result:newInstance);



// ES6 Class syntax : Syntax sugar
class Person {
    constructor(name){
        this.name=name;
    }
}
var object=new Person("Sudheer");

//Singleton pattern

var object = new (function(){
    this.name="Sudheer";
})();


// prototype chain is used to build new types of objects based on existing ones. It is similar to 
// inheritance in a class based language.

//The prototype on object instance is available through Object.getPrototypeOf(object)
// or _proto_ property

// Call, Apply, Bind function

var exployee1={firstName:"John",LastName:"Rodson"};
var exployee2={firstName:"Jimmy",LastName:"Baily"};

function invite(greeting1,greeting2){
    console.log(
        greeting1+""+this.firstName+""+this.lastName+","+greeting2
    );
}

invite.call(exployee1,"Hello","How are you?")// Hello John Rodson, How are you
// call(): the call() method invokes a function with a given this value and arguments provided one by one 

// Invokes the function with a given this value and allows you to pass in arguments as an array
invite.apply(exployee1,["Hello","How are you?"]);

//bind: returns a new function, allowing you to pass any number of arguments


var inviteEmployee=invite.bind(exployee1); // returns a new function, allowing you to pass any number of arguments


/**
 * == and === operators
*/
0==false //ture
0===false // false
1=="1"    //true
1==="1"    //false
null==undefined //ture
null===undefined //false
'0'==false // true
'0'===false // false
[]==[] or []===[]//false, refer different objects in memory
{}=={} or {}==={}//false, refer different objects in memory


// first class function
// JS: functions are first class objects.

const handler=()=> console.log("This is a click handler function");
document.addEventListener("click",handler);
// in above example, handler functions assigned to a listener


const unaryFunction = (a)=>console.log(a+10);


// 
let numberArray=[];
const impureAddNumber =(number)=>numberArray.push(number);
argNumberArray.concat([number]);


// let keyword practice : the let statement declares a block scope local variable.
let counter=30;
if(counter===30){
    console.log(counter);
}

console.log(counter);



let counter=1;
switch(x){
    case 0:{
        
        let name;
        break;
    }
    
    case 1:
        let name; // SyntaxError for redeclareation
        break;
}


// TDZ: Temporal Dead Zone
function somemethod(){
    console.log(counter1);
    console.log(counter2)
    var counter1=1;
    let counter2=2;
}

// closures
// own scope where variables defined between its curly brackets
// Outer function's variables
// Global variables

function Welcome(name){
    var greetingInfo=function(message){
        console.log(message+""+name);
    };
    return greetingInfo;
}
var myFunction=Welcome("John");
myFunction("Welcome");
myFunction("Hello Mr.");

// the inner funciton has access to the variables in the outer function
// scope even after the outer function has returned

// access web storage
localStorage.setItem("logo",document.getElementById("logo").value);
localStorage.getItem("logo");

let i=0;

function timedCount(){
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();


if(typeof w=="undefined"){
    w=new Worker("counter.js");
}


const promise=new Promise(function (resolve,reject){
    //promise description
});

// JS is an event driven language. 
// instead of waiting for a response,JS will keep executing while
//listening for other events.

function firstFunction(){
    //Simulate a code delay
    setTimeout(function(){
        console.log("First function called");
    },1000);
}
    function secondFunction(){
        console.log("Second function called");
    }
    firstFunction();
    secondFunction();
