var arrayfunc= (array,sum) =>{
    for(let i=0;i<array.length;i++){
        var first = array[i];
        for(let j=i+1;j<array.length;j++){
            var second=array[j];

            if(first+second==sum){
                console.log("first:"+first+"second:"+second);
            } else {
               // console.log("second");
            }
        }
    }
}

var a= [1,2,3,4,5,6,0,-2,-3];

arrayfunc(a,2);


let numbers=[1,2,3,4,5,6];

let reverseNumbers=numbers.slice.reverse();

console.log(reverseNumbers);


var rotfunc= (str1,str2){
    if(str1==str2) return true;
    if(str1.length!==str2.length) return false;

    var av = str2.indexOf(str1[0]);
    if(av===-1) return false;

    return str1===str2.slice(av) +str2.slice(0,av);
}

var find_notRepeatedchar(str){
    var arr1=str.split("");
    var result="";
    var ct=0;

    for(var x=0;x<arr1.length;x++){
        ct=0;
        for(var y=0;x<arr1.length;x++){
            ct=0;
            for(var y=0;y<arr1.length;y++){
                if(arr1[x]===arr1[y]){
                    ct+=1;
                }
            }
            if(ct<2){
                result=arr1[x];
            }
        }
    }
    return result;
}



var isOperator= (x)=>{
    switch(x){
        case "+": console.log("+");
        case "-":
            return true;
    }
    return false;
}

var preToPost=(pre_exp) =>{
    let s= [];

    let length=pre_exp.length;
    for(let i = length-1;i>=0;i--){
        if(isOperator(pre_exp[i])){
            let op1=s[s.length-1];
            s.pop();
            let op2=s[s.length-1];
            s.pop();

            let temp=op1+op2+pre_exp[i];

            s.push(temp);
        } else{
            s.push(pre_exp[i]+"");
        }
    }

    return s[s.length-1];
}

let pre_exp="*-A/BC-/AKL";
console.log("Postfix:"+preToPost(pre_exp));
console.log("Q7");

var convert=(input)=>{
    var x=input.split("");
    var output="";

    var symbols=["+","-","*"];

    for (var i=0;i<x.length;i++){
        if(symbols.includes(x[i])){
            for(var j=0;j<input.length;j+=2){
                if(output[j]==""){
                    output=output+x[i];
                }
            }
        } else {
            output=output+x[i];
            console.log(output);
        }
    }
}


const {
    Action,
    Event,
    SingleThing,
    Property,
    Thing,
    Value,
    WebThingServer,
} = require('webthing');


class SmokeSensor extends Thing {
    constructor(){
        super('My Humidity Sensor',['MultilevelSensor'],
        'A web connected humidity sensor');
        this.pm2p5cc= new Value(0.0);
        this.temperature= new Value(0.0);
        this.humidity= new Value(0.0);
        this.pm2p5cc= new Value(0.0);
        this.pm10cc= new Value(0.0);
        this.VOCH= new Value(0.0);
        this.addProperty(
            new Property(this,'pm2p5cc',{
                
            })
        )
    }
}

setInterval(()=>{
    const data_temperature =this.readFromGPIO("temperature");
    const data_humidity =this.readFromGPIO("humidity");
})


var runServer=()=>{
    const sensor=new SmokeSensor();

    const sensor2= new AlarmSensor();

    startSmokeSensorServer();

    startSubscribeServer(ueList);

    const server= new WebThingServer(new SingleThing(sensor),8181);
    const server2= new WebThingServer(new SingleThing(sensor2),8181);

    server.start().catch(console.error);
    server2.start().catch(console.error);
    startAlarmSensorServer();
}

module.exports.runServer=runServer;