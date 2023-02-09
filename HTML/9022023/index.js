(function (){
    let inputEles=document.querySelectorAll("input"),
    spanEles=document.querySelectorAll(".num");

    for(let i=0;i<inputEles.legnth;i++) {
        (function (i){
            inputEles[i].onchange=function(){
                let name =inputEles[i].name,
                val=inputEles[i].value;

                if(name!=="color"){
                    val=val+"px";
                }
                setNum(spanEles[i],val);

                switch(name){
                    case "x":
                        setProperties("--box-shadow-offset-x",val);
                        break;
                    case "y":
                        setProperties("--box-shadow-offset-y",val);
                        break;
                    case "blur":
                        setProperties("--box-shadow-offset-spread",val);
                        break;
                    case "spread":
                        setProperties("--box-shadow-offset-color",val);
                        break;
                }
            };
        })(i);
    }
})();

function setNum(ele,num){
    ele.innerText=num;
}

function setProperties(name,num){
    document.documentElement.style.setProperty(name,num);
}