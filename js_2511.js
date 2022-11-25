// javascript prototype chain
function Person(first,last,age,eyecolor){
    this.firtsName=first;
    this.LastName=last;
    this.age=age;
    this.eyeColor=eyecolor;
}

const myFather= new Person("John","Doe",50,"blue");
const myMather= new Person("Sally","Rally",48,"green");



//
function Person(age,eyecolor){
    this.age=age;
    this.eyecolor=eyecolor;
}


// add new sth into a constructor
Person.prototype.nationality="English"

//console.log(Person.prototype.nationality);

//add new method into a constructor
Person.prototype.name=functoin( ) {
    return this.firtsName+""+this.LastName;
};



//Javascript Const
// const variables cannot be reassigned
const PI=3.141592653589793;
PI=3.14;
PI=PI+10;

// Always declare a variable with const when you know that the
// value should not be changed

// Constant Arrays
const cars=["Saab","Volvo","BMW"];

cars[0]="Toyota";
// you can change some part of the array: only elements operation
cars.push("Audi");


//Constant objects
const car={
    type:"Fiat",
    model:"500",
    coloar:"white"
};

car.color="red";
// YOu can add a property directly
car.owner="Johnson";


let y=10;
{
    const x =2;   
}
const x=20;

// Redelaring a variable with const in another scope is allowed
{
 const  x=2;
 // var x=2 error ,even inside this block
}

{
    const x=3;
}
{
    const x=4;
}
/*
Cannot redeclare block-scoped variable 
*/


// var Hoisting : var variables are hoisted which means you can use it before is is declared
carName ="Volvo"
var carName;


carType="4x4";
var carType;



/**
 * JS variables:
 * let :   variables can change 
 * const : declare for general situation
 * var : old key word for variables
 */


