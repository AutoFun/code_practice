require('ts-node').register;
// Dynamic Types (any)
let age:any=25;

age=true;
console.log(age);
age="hello";

console.log(age);

let mixed: any[]=[];

mixed.push(4);
mixed.push("oohboy");
mixed.push("oohboy");
mixed.push(true);

mixed.forEach((mixed:any)=>{
    console.log(mixed);
})


let tech : {name:any;age:any};
let techgirls:{name:any;portfolio:any};
tech={name:"emmy",age:30}
console.log(tech);

// any type

let greeting=()=>{
    console.log("Hello World");
}

greeting();


let greeting2: Function;
greeting2=()=>{
    console.log("Hey");
}

const add = (a:number,b:number,c?:number|string)=>{
    return a+b; // c becomes optional because of ?
}

// inferred function

const mul=(a:number,b:number):number=>{
    return a*b;
};


let result =mul(2,4);


// Type Aliases

const logDetails=(uid:string|number,item:string)=>{
    console.log(`${item} has uid of${uid}`);
};

const greets=(user:{name:string;uid:string|number})=>{
    console.log(`${user.name} says Yes`);
};


const greeting2 =(user:obj)=>{
    console.log(`${user.name} says Yes`);
}



var startGame=()=>{
    let playerName:string|undefined=getInputValue('playername');
    logPlayer(playerName);

    postScore(80,playerName);
    postScore(-5,playerName);
}

var getInputValue=(elementID: string): string|undefined => {
    const inputElement: HTMLInputElement =<HTMLInputElement>document.getElementById(elementID);

    if(inputElement.value===''){
        return undefined;
    }
    else{
        return inputElement.value;
    }
}

var postScore=(score:number,playerName:string='MuliMath'):void=>{
    let logger:(value:string)=>void;

    if(score<0){
        logger=logError;
    }
    else{
        logger=logMessage;
    }

    const scoreElement: HTMLElement|null =document.getElementById('postedScores');
    scoreElement!.innerText=`${score}-${playerName}`;

    logger(`Score:${score}`);
}

const firstPlayer: Player = new Player();
firstPlayer.name='Lorcan';
console.log(firstPlayer.formatName());