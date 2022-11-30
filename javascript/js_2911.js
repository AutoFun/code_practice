/**
 * algorithm: recursion and dynamic programming
 * 
 * 
*/


// var tripleStep= function(steps){
//     if(steps<0) return 0;
//     else if(steps===0) return 1;  

//     return tripleStep(steps -1)+tripleStep(steps-2)+tripleStep(steps-3);
// }

//console.log(tripleStep(5));

var tripleStep=function(steps,memo=[]){
    if(steps<0) return 1;
    else if (steps===0) return 1;
    
    if(!memo[steps]){
        memo[steps]=tripleStep(steps-1,memo)+tripleStep(steps-2,memo)+tripleStep(steps-3,memo);
    }
    
    return memo[steps];
}

//console.log(tripleStep(50))


// var fibonacci=function(num){
//     if(num<=1) return num;
//     return fibonacci(num-1)+fibonacci(num-2);
// }

// console.log(fibonacci(10))

// Bottom up  O(N)TIME   O(1) SPACE
var fibonacci=function(num){
    if(!num) return 0

    let a=0,b=1;

    for(let i=2;i<num;i++){
        const c=a+b; // c=formula but can not be changed
        a=b;
        b=c;
    }

    return a+b;
}

//console.log(fibonacci(12));


//Top Down

var fibonacci2=function(num,memo=[]){
    if(num<=1) return num;

    if(!memo[num]){
        memo[num]=fibonacci2(num-1,memo)+fibonacci2(num-2,memo);
    }

    return memo[num];
}

var Iterator=function(num){
    for (let i=0;i<num;i++) {
       console.log(fibonacci2(i));
    }
}

//console.log(fibonacci2(9))
//console.log(Iterator(10))  // log 本身有log, print undefined after the function is finished, 

//console.log(console.log(fibonacci2(10))); // 打印两个东西，内部打出来了

//var value=console.log(fibonacci2(10));
//console.log(value); // value = undefined

/**
 * str.mathch().map(group=>group[0]+group,length).join``
 * 
*/
var stringCompression2=function(str){
    if(!str||str.length<=2) return str;

    const compressed = str.match(/(.)\1*/g)
                        .map(group=>group[0]+group.length)
                        .join``;
    
    return compressed.length<str.length?compressed:str;
}

//console.log(stringCompression2("a(asd\df1)1.g/*"))


/**
 * rotate matrix
 * two dimension array operation
 * 
*/

var rotateMatrix=function(matrix){
    if(!matrix||!matrix.length) throw Error('invalid matrix');

    const len=matrix.length;
    for(let layer=0;layer<len/2;layer++){ //  layer < len/2
        const firstLayer=layer,
            lastLayer=len-1-layer;  // similar with two pointers method
        
            for(let i=layer;i<lastLayer;i++){
                const offset=i-layer,
                top=matrix[firstLayer][i];
                
                matrix[firstLayer][i]=matrix[lastLayer-offset][firstLayer];    
                matrix[lastLayer-offset][firstLayer]=matrix[lastLayer][lastLayer-offset];    
                matrix[lastLayer][lastLayer-offset]=matrix[i][lastLayer];    
                matrix[i][lastLayer]=top;
                }
        }
    return matrix;
}

const matrix4X4 = [
    [1, 2, 3, 4,5,6],
    [12, 13, 14, 5,5,6],
    [11, 16, 15, 5,6,6],
    [10, 9, 8, 7,5,6],
    [10, 9, 8, 7,5,6],
    [10, 9, 8, 7,5,6]
  ];

  console.log(rotateMatrix(matrix4X4));


  // git master updated