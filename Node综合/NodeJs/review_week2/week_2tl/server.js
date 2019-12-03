const http=require('http');
function onRequest(rer,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write("hello,wroud");
    res.end()
}
http.createServer(onRequest).listen(8088,function(){
	console.log("listen......")
})
a();