/**
 * Created by yunhuan on 2016/12/10.
 */
//载入express框架
var express=require("express");
//实例化express
var app=express();
//打印 hello world服务
/*//在窗口命令打印
app.get("/",function(){
    console.log("hello world!");
})
//在浏览器页面打印
app.get("/",function(request,respond){
    respond.end("hello world");
});*/



//在浏览器页面打印
var index=require("./routes/index");
app.get("/",index);
app.listen(8080,function(){
    console.log("listen at port 8080");
});