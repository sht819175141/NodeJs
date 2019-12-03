/**
 * Created by yunhuan on 2016/12/22.
 */
var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{
        "content-type":"text/html;charset=utf8",
        "Access-Control-Allow-Origin":"http://localhost:8080"//‘ –ÌøÁ”Ú
    });
    var data={
        name:"aguai",
        age:22
    }
    res.end(JSON.stringify(data));

}).listen(8081,function(){
    console.log("listen port at 8081");
})