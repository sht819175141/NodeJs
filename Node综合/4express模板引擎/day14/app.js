//入口文件也是主文件

const express=require("express");
const ejs=require("ejs");
const body_parser=require('body-parser');//body-parser模块化主要用于post提交传递数据

var app=express();
app.use(body_parser.urlencoded({extended:false})); //body_parser是接收post数据用的通过body

app.set("views",__dirname+"/views/");
app.set("view engine","ejs");	//这里必须为view，是个对象

//app.use(express.static("./public"));

var conf=require("./config/configRouter.js");
conf(app);



var server=app.listen(3000,function(){
	console.log("3000.......");
})