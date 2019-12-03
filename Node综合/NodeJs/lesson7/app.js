//----引入内置对象http
var http=require("http");
//console.log(http);
//----启动http服务：
//通过创建服务器函数，回掉函数中传两参数，一个代表请求（request），一个代表响应 （response）
//写法一：
/*var server=http.createServer(function(req,res){
   console.log("hello aguai!") ;
})
//监听端口
server.listen(8080,function(){
    console.log(" listen port 8080!") ;
})*/
/*
//写法二：
http.createServer(function(req,res){
    console.log("hello aguai!");
}).listen(8080,function(){
    console.log(" listen port at 8080!") ;
})*/

http.createServer(function(request,response){
    //console.log("hello word!")//在命令窗口输出
    //response.write("hello !");
    //response.end("world!");//在浏览器页面中输出
    //response.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
    //console.log(request.headers);
    //request.on("data",fucntion(){})
    //request.on("end",fucntion(){})
    var json={
        name:"aguai",
        sex:"女"
    }
    response.end(JSON.stringify(json));
}).listen(8080,function(){
    console.log("listen port at 8080");
})



