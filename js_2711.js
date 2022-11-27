/**
 * Js practice 27112022
 * 
*/

const o ={
    a:1,
    b:2,
    //_protp_ sets the [[Prototype]]. It's specified here
    // as another object literal.
    _proto_:{
        b:3,
        c:4,
        _proto_:{
            d:5,
        },
    },
};

//{a:1,b:2}--->{b:3,c:4}--->{d:5}--->
//Object.prototype--->null
//console.log(o.d);


const parent ={
    value:2,
    method(){
        return this.value+1
    }
};

console.log(parent.method())

const child={
    _proto_:parent,
};

console.log(child.method());

child.value=4;


//console.log(child.method());



const boxes= [
    {value:1, getValue(){ return this.value;}},
    {value:2, getValue(){ return this.value;}},
    {value:3, getValue(){ return this.value;}},
]

const boxPrototype ={
    getValue(){ return this.value;};
}

const boxes2 =[
    {value:1,_proto_:boxPrototype},
    {value:2,_proto_:boxPrototype},
    {value:3,_proto_:boxPrototype},
];

function Box (value){
    this.value=value;
}


Box.prototype.getValue=function(){
    return this.value;
}


const boxes3=[
    new Box(1),
    new Box(2),
    new Box(3),
]

class Box {
    constructor(value){
        this.value=value;
    }
    
    getValue(){
        return this.value;
    }
}