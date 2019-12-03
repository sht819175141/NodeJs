const express=require('express');
const body_parser=require('body-parser');

var app=express();

app.use(body_parser.urlencoded({extended:false}));//body_parser是接收post数据用的通过body
//console.log(body_parser);
//加载静态资源
app.use(express.static("./public"));

app.post("/dopost",function(req,res){
	res.send("holle"+req.body.usename);//用body_parser来为post提交传参数
})

/*app.get("/:xm/:stdhao",function(req,res){//get请求通过地址栏传参数
	console.log(req.params);
	res.send("hello world"+req.params.xm+"xueaho"+req.params.stdhao);
})
app.get("/abc",function(req,res){
	//res.send("hello abc");
	res.sendFile(__dirname+"/public/a.txt");
})*/

app.listen(3000);