const http=require("http");
const fs=require("fs");
var ser=http.createServer(function(req,res){
	fs.readFile("./a.html",function(err,files){
		res.end(files);
	})
}).listen(3002);