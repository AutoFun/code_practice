/**
 * @function abs
 * @description This script will find the absolute value of a number.
 * @param {number} num- The input Integer
 * @return {number} - Absolute number of num.
 * @example abs(-10)=10
 */ 
const abs =(num)=>{
 const validNumber =+num // converted to number, also can use -Number(num)
 if (Number.isNaN(validNumber)){
    throw new TypeError('Argument is NaN-Not a Number')
 }

 return validNumber < 0 ? -validNumber:validNumber
}

// INFINITY is a number ???
//console.log(abs(Number.NEGATIVE_INFINITY))

const abs2 =(num)=>{
    const valid=Number(num)
    if(Number.isNaN(valid)||Number.POSITIVE_INFINITY===valid || Number.NEGATIVE_INFINITY===valid){
        throw new TypeError('Argument is not a valid Number')
    }

    return valid<0? -valid:valid
}

//console.log(abs2(Number.NEGATIVE_INFINITY))





/**
 * S of the Arc
 * radian: radius=n*pi*r/180
 * degreeToRadian: degree*(pi/180)= pi *(degree/180)
 * 类似三角形面积：底*高*0.5
 * 
 * Question：定义上， 弧度好像最多是一个圆周大小
*/
function degrees_to_radians(degrees){
    var pi = Math.PI;
    return degrees * (pi/180);
}


function circularArcArea(radius, degrees){
    return Math.pow(radius,2)*degrees_to_radians(degrees)/2
}

// when radius =360, S 
//console.log(circularArcArea(10,360)); 


/**
 * Using Matrix exponentiation to find n-th fibonacci in O(log n) time
 * 
 * 
 * 
*/

const copyMatrix=(A)=>{
    return A.map(row=>row.map(cell=>cell))
}

const Identity =(size)=>{
    const isBigInt =typeof size ==='bigint'
    const ZERO =isBigInt? 0n:0
    const ONE=isBigInt?1n:1
    size=Number(size)
    const I=Array(size).fill(null).map(()=>Array(size).fill())
    return I.map((row,rowIdx)=>row.map((_col,colIdx)=> {
        return rowIdx===colIdx? ONE:ZERO 
    }))
}

// 今天练习，一些MATH problem. 理论知识不懂，
//去先复习，抽象出来伪代码。触类旁通

/**
 * 
 * js 代码练习
 * 
 * 26112022
 * 
 * 
*/