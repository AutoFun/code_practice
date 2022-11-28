// js code practice
/**
 * 
 * use class to finish a promise example
 * 
 * 
*/

// create a class for Promise

class Promise{
    constructor(executer){
        this.status='pending'; // default state pending
        this.value=undefined   // success status default state undefined
        this.reason=undefined  // fail status default state    undefined
        // Only can be changed in pending state
        let resolveFn=value =>{
            // waiting : resolve successfully
            if(this.status==pending){
                this.status='resolve';
                this.value=value;
            }
        }
            // waiting: reject successfully
        let rejectFn=reason =>{
            if(this.status==pending){
                this.status='reject';
                this.reason=reason;
            }
        }

        try{
            // pass function {resolve}{reject} to executer
            executer(resolve,reject);
        }catch(e){
            reject(e); // fail then move to catach
        }
    }
    then(onFufilled,onReject){
        // if status='resulve' ->onFufilled
        if(this.status='resolve'){
            onFufilled(this.value);
        }
        // if status='reject' ->onReject
        if(this.status='reject'){
            onReject(this.reason);
        }
    }
}


// for loop in js
let arr=[];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}

//for of
let arr2=[];
let sum2=0;
for(value of arr2){
    sum+=value;
}


// export, import

export var firstName='Michael';
export var lastName='Jackson';
export var year=1958;

var firstName2='Michael';
var lastName2='Jackson';
var year2=1958;

export {firstName2,lastName2,year2};

let bosh=function crs(){}
export default bosh;
import crc from 'crc';


let bosh2=function crs2(){}
export bosh2;
import {crc} from 'crc';



// git master updated
