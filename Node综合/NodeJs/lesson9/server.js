var http=require("http");
//Æô¶¯·şÎñÆ÷
http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/html;charset=utf8"});
    response.end("response finished");
}).listen(8080,function(){
    console.log("listen port at 8080");
});