var http=require("http");
var url=require("url");
//Æô¶¯·şÎñÆ÷
http.createServer(function(request,response){
    response.writeHead(200,{"content-type":"text/html;charset=utf8"});
    response.end("response finished huhu~~");

}).listen(8090,function(){
    console.log("listen port at 8090");
});