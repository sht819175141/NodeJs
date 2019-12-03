const http=require("http");
/* 读取页面 */
const fs=require("fs");
const path=require("path");
/* get提交使用模块 */
const url=require("url");
/* post提交使用模块 */
const querystring=require("querystring")

var server=http.createServer(function(req,res){
	/*console.log(req.url)*/
	pathname=url.parse(req.url,true).pathname;
	query=url.parse(req.url,true).query;
	if(pathname=="/chan"){
		/* get提交 */
		res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
		res.write("这是第"+query.num+"页")
	}else if(pathname=="/forms"){
		/* post提交 */
		var str="";
		req.on("data",function(chunk){
			str+=chunk
		})
		req.on("end",function(){
			str=querystring.parse(str)
			/*console.log(querystring)*/
			res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
			res.write("您的姓名是:"+str.user+",邮箱是:"+str.email)
		})
	}else{
		if(req.url=="/"){
			pathname="./html/a.html"
		}else{
			pathname=path.join("./html",req.url)
		}
		/* 获取扩展名 */
		var name=path.extname(pathname);
		/*console.log(name)*/
		/* 获取json数据 */
		var jsons=JSON.parse(fs.readFileSync("./mime.json"))
		/*console.log(jsons)*/
		var main=jsons[name]

		fs.readFile(pathname,function(err,data){
			if(err){
				console.log("err");
			}else{
				res.writeHead(200,{"Content-type":name})
				res.write(data)
			}
		})
	}
})
server.listen(1000)
console.log("listen 1000...")