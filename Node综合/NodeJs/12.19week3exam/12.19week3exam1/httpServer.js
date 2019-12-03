/**
 * Created by yunhuan on 2016/12/19.
 */
var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":'text/html;charset="utf-8"'});
    res.end("create http server success");
}).listen(8080,function(){
    console.log("listen port at 8080");
})
