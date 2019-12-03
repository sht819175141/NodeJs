/**
 * Created by yunhuan on 2016/12/12.
 */
var http=require("http");
http.createServer(function(req,res){
    //res.writeHead(200,{"content-type":"text/html,charset='utf8'"});
    res.end("name:'aguai',age:21");
}).listen(8090,function(){
    console.log("listen port at 8090");
});