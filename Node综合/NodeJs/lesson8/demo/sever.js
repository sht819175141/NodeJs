var http=require("http");
var querystring=require("querystring");
var util=require("util");
var url=require("url");
http.createServer(function(request,response){
    //监听请求结束
    request.on("end",function(){
        //设置服务器响应的状态码
        response.writeHead(200, {
            'Content-Type':'text/html;charset=utf8',
            "Access-Control-Allow-Orogin":"http://localhost:63342"
        });
        response.end({"name":"aguai","pwd":"101010"});
    })
}).listen(3000);