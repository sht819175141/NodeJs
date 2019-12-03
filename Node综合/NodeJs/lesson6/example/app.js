/**Created by yunhuan on 2016/12/7 */
var http=require("http");
http.createServer(function(request,response){
    response.writeHead(200,{
        "content-type":"text/html;charset=utf8",
        "Access-Control-Allow-Origin":"http://localhost:63342"//‘ –ÌøÁ”Ú
    });
    response.end('{"name":"huanhuan","num":520}');
}).listen(8080,function(){
    console.log("listen port at 8080")
})
