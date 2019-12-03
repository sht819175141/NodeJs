/**
 * Created by shi on 2016/12/14.
 */
var express=require("express");
var path=require("path");
var ejs=require("ejs");
var bodyParser=require("body-parser");
var app=express();
//引入routes下的index.js文件 (可以不写index.js 默认就是它) 并向其传递参数app
//设置静态文件服务系统
app.use(express.static(path.join(__dirname,"public")));
//设置body-parser模块
app.use(bodyParser.urlencoded({extended:false}));
//设置模板引擎目录
app.set("html",path.join(__dirname,"html"));
//设置模板引擎类型  页面解析格式为html  切记下面这句话没有s 是 view
app.set("view engine","html");
//固定语法 记住即可
app.engine("html",ejs.__express);
//引用routes必须放在最下面 因为前面有bodyParser
var routes=require("./routes")(app);

app.listen(8686,function(){
    console.log("listen 8686...");
})