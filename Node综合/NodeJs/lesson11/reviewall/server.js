/**
 * Created by yunhuan on 2016/12/8.
 */
var http=require("http");
http.createServer(function(req,res){

    res.end("respond is end");
}).listen(8080,function(){
    console.log("listen port at 8080");
})