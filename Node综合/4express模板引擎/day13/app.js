const express=require("express");
var app=express();

/*app.all("/",function(req,res,next){  app.all是特殊的路由
	console.log("all 匹配");
	next();
})*/

/*app.get("/",function(req,res,next){  //next为执行下一个callback函数。中间件
	console.log("index");
	res.send("首页");
	//next();
},function(req,res){
	console.log("以到index");
});

app.get("/list",function(req,res,next){
	res.send("list 王爷");
});

app.get(/a/,function(req,res,next){
	res.send("所有a的");
});

app.post("/userlist",function(req,res){
	var json={mes:0,name:"zsss"};
	res.send("this is userlist 页面");

	//res.json(json); 发送一个JSON格式的响应
	//res.jsonp();	发送一个支持 JSONP 的 JSON 格式的响应
	//res.download();	提示下载文件
	//res.end();	终结响应处理流程
	//res.redirect();	重定向请求
	//res.render();		渲染视图模版
	//res.send();	发送各种类型的响应
	//res.sendFile();	以八位字节流的形式发送文件
	//res.sendStatus();	  设置响应状态代码，并将其以字符串形式作为响应体的一部分发送
	
});*/

//路由级中间件

app.route("/index")  //routede 路由
	.get(function(req,res){
		res.send("this is get index")
	})
	.post(function(req,res){
		res.send("this is post index");
	})

/*var conf=require("./conf.js");// 利用express.Router();从外部引入路由route
app.use("/aaa",conf);*/


//应用级中间件 这里的路径可有可无
/*app.use("/user/:id",function(req,res,next){
	console.log(req.originalUrl);
	console.log("time"+new Date())
	next();
});
app.get("/user/:name",function(req,res){
	res.send(req.params.name); //params匹配地址中的参数name
})*/


//应用级中间件 带if判断next("route")跳过中间件 这里用get
/*app.get("/user/:id",function(req,res,next){
	if(req.params.id == 0){
		next("route");
	}else{
		next();
	}
},function(req,res){
	res.send("this is zhongjian....")
})
app.get("/user/:name",function(req,res){
	res.send("this is xiayige");
	//res.render()  渲染页面
})*/

//错误处理中间件
/*app.use("/use/:id",function(req,res,next){
	next(err);	执行错误中间件
});
app.use(function(err,req,res,next){		错误中间件
	console.log(err);
	res.status(err.status || 501);
	res.send({error:err.message});
});*/

//内置中间件 就是加载静态资源 可以指定多个
/*app.use(express.static("./src"));
app.use("/stat",express.static("./public"));*/

var server=app.listen(3001,function(){
	console.log("start 3001..");
	//console.log(server.address());
});