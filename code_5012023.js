var http=require('http');
var sys=require('sys');
var fs=require('fs');

http.createServer(function(req,res){
    debugHeaders(req);
    if(req.headers.accept && req.headers.accept=='text/event-stream'){
        if(req.url=='/events'){
            sendSSE(req,res);
        } else{
            res.writeHead(404);
            res.end();
        }
    } else {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(fs.readFileSync(__dirname+'/sse-node.html'));
        res.end();
    }
}).listen(8000);


function sendSSE(req,res){
    res.writeHead(200,{
        'Content-Type':'text/event-stream',
        'Cache-Control':'no-cache',
        'Connection':'keep-alive'
    });

    var id=(new Date()).toLocaleTimeString();

    setInterval(function(){
        constructSSE(res,id,(new Date()).toLocaleTimeString());
    },5000);

    constructSSE (res,id,(new Date()).toLocaleTimeString());
}

/**
 * Server Sent Events
 * 
 * send data to clients using ordinary HTTP protocols
 * 
 * using node JS for the server and plain JS for the HTML file.
 * 
 * 
 * **/