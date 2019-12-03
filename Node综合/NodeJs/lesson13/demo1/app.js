/**
 * Created by yunhuan on 2016/12/10.
 */

var express=require("express");
var path=require("path");

var index=require("./routes/index");
var user=require("./routes/user");
//实例化express
var app=express();

//设置视图路径：
app.set("html",path.join(__dirname,"html"));
//设置视图的模板引擎：使用render时才需要设置（views文件件下的html页面是为了实现渲染）
app.set("html engine",'html');
//设置标准路径：
app.use(express.static(path.join(__dirname,"public")));


//创建路由的两种方：

//法一：app.router
/*
app.get("/",index);
app.get("/user",user);
app.listen(8080,function(){
    console.log("listen at port 8080");
});*/

//法二：express.Router
app.use("/",index.router);
app.use("/user",user);
app.listen(8080,function(){
    console.log("listen at port 8080");
});