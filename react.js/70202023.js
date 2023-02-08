

let ul= document.getElementById('container');

let total= 100000

let once=20 // single time

let page=total/once

let index=0

var loop=function(curTotal,curIndex){
    if(curTotal<=0){
        return false;
    }

    let pageCount=Math.min(curTotal,once);
    setTimeout(()=>{
        for(let i=0;i<pageCount;i++){
            let li=document.createElement('li');
            li.innerText=curIndex+i+':'+ ~~(Math.random()*total)
            ul.appendChild(li)
        }
        loop(curTotal-pageCount,curIndex+pageCount)
    },0)
}
loop(total,index)



let bufferPool=[];
let bufferTimer;

function onMsg(data){
    bufferPool.push(data);

    if(!bufferTimer){
        bufferTimer=setTimeout(()=>{
            render(bufferPool);
            bufferPool=[];
            socketTimer=null;
        },500);
    }
};

ws.on('message',onMsg);