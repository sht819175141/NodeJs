/**
 * Created by shi on 2016/12/14.
 */
//这是路由文件夹里的主文件  引入其他路由文件
//引入home模块
var home=require("./home");
var userlogin=require("./userlogin");
//抛出一个方法 接收app.js 传过来的参数app
module.exports=function(app){
    app.get("/",home);
    app.post("/userlogin",userlogin);
}

