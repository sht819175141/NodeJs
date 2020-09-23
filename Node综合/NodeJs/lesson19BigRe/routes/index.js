/**
 * Created by yunhuan on 2016/12/19.
 */
var login=require("./login");
module.exports=function(app){
    app.get("/",login);
    //跨域的接口：userLogin
    app.get("./userLogin",function(req,res){
        var username=req.body.username;
        var passward=req.body.passward;
        if(username=="huan" && passward=="123"){
            res.jsonp({
                errCode:0,//错误代码
                errMg:"",//错误信息
                isLogin:true,//是否登录成功：即请求成功
                isSucess:true//是否连接到数据库
            })
        }else{
            res.jsonp({
                errCode:1,
                errMg:"login failed",
                isLogin:false,
                isSucess:false
            })
        }
    })
    //form表单默认的提交方式为post
}