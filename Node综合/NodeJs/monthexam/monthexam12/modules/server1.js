/**
 * Created by yunhuan on 2016/12/22.
 */
var http=require("http");
var url=require("url");
http.createServer(function(req,res){
    res.end("response a html page");
    res.writeHead(200,{
        "content-type":"text/html;charset=utf8",

    });
    console.log(req.url)

    //res.render("index")
}).listen(8080,function(){
    console.log("listen port at 8080");
})