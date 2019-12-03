const http=require("http")
http.createServer(function(req,res){
	res.end("hello word")
}).listen(8081)