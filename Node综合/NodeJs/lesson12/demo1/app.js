/**
 * Created by yunhuan on 2016/12/9.
 */
//express：通过Nodejs api封装成的一个第三方框架

//引入一个express模块
var express=require("express");
var index=require("./routes/index");
var index2=require("./routes/index2");
//实例化一个express
var app=express();
//console.log(app);
//创建一个服务：
/*app.get("/",function(req,res){
    res.send("hello");//localhost:8080
});
app.get("/index",function(req,res){
    res.send("this is a index");//localhost:8080/index
});*/
app.get("/",index);
app.get("/index",index2);
app.listen(8080,function(){
    console.log("listen 8080");
});

