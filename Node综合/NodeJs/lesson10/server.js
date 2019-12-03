var http=require("http");
http.createServer(function(request,response){
    response.end("child process");
}).listen(8090,function(){
    console.log("listen port at 8090")
})