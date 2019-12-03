const http=require('http');
function onRequest(rer,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write("hi,wroud");
    res.end()
}
http.createServer(onRequest).listen(8080,function(){
	console.log("listen1......")
})
