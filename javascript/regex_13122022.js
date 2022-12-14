// 16 color model
let regex = '/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3}/g';

let string2 ="#12f3a1 #ffBabd #FFF #123 #586";
console.log(string2.match(regex));



// 24 hours time model
let regex2 = '/^(0?[0-9]|1[0-9]|2[0-3]):(0?[0-9]|[1-5][0-9])$/'
let arr = ["23:59", "04:09","8,9","19:47"];
let res =[];
for (let i =0;i<arr.length;i++){
    if(regex.test(arr[i])){
        res.push(arr[i]);
    }
}


// IP address

let regex3 = '/^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.\1\.\1\.\1$/';
let arr2 = ["192.168.255.255","156.234.156.215","1.2.3.4"];
let res2 =[];
for (let i=0;i<arr.length;i++){
    if(regex.test(arr[i])){
        res.push(arr[i]);
    }
}

// formatted date
let regex4= '/(\d{4})-(\d{2})-(\d{2}/';
let string3="2020-09-12";
let res3=string3.replace(regex,function(){
    return RegExp.$2+'/'+RegExp.$3+"/"+RegExp.$1;
});


// 
let regex5='/(\w)\1+/g';
let str = "aaaaabbbbbdddddggggfffff";
let res5=str.replace(regex,"$1");


//update the HTML tags
let regex12= '/<a[^>]+>/g';

// get element by id -> to Hump
function toHump(str){
    return str.replace('/-(\w/)/g',function($1){})
}


// Email Address
function isAvailableEmail(sEmail){
    let reg='/^([\w+\._-[)+@\w+[\.\w]+$/';
    return reg.test(sEmail);
}

function parse2Int(num){
    var regex='/^\d+/';
    num=regex.exec(num)[0];
    return parseInt(num);
};

function parse2Int(num) {
    return parse2Int(num,10);
}

// rgb color string to hex
function rgb2hex( sRGB){
    let reg='/rgb\((\d+),\s*(\d+),\s*(\d+)\)/';
    let res =sRGB.match(reg);
    if(!res){
        return sRGB;
    } else {
        let str ='#';
        for(let i=1;i<=3;i++){
            let num=parseInt(res[i]);
            if(num<=255&&num>=0){
                str +=(num<16?'0'+num.toString(16):num.toString(16));
            } else {
                return sRGB;
            }
        }
        return str;
    }
}


// -webkit-border-image ===> webkitBorderImage

function cssStyple2DomStyle(sName){
    let reg='/-(\w)/g';
    let res=sName.replace(reg,function(fullMatch,g1,index){
        if(index===0) return g1;
        
        return g1.toUpperCase();
    })
}



// 
let object ={
    protocol:"http",
    host:"www.google.com",
    path:"product/list",
    query:{
        id:"123456",
        sort:"discount"
    },
    hash:"tittle"
}

function parseUrl(str) {
    if(str){
        var obj={};
        var queryArr=[];
        var re='/^(http[s]?):\/\/([0-9a-zA-Z\.]+)\/([a-zA-Z0-9\/]+)\?([a-zA-Z0-9\=\&]+)#([0-9a-zA-Z\.]+)$/';

        var reArr =re.exec(str);
        if(reArr){
            obj.protocol=reArr[1];
            obj.host=reArr[2];
            obj.path=reArr[3];
            queryArr=reArr[4].split('/[\&\=]+/');
            obj.query={};
            for(var i=0;i<queryArr.length;i+=2){
                obj.query[queryArr[i]]=queryArr[i+1];
            }
            obj.hash=reArr[5]
            return obj;
        } else {
            return null;
        }
    } else {
        return null;
    }
}


// should test the regular expression on website, and declare them before the correctness is promised.

