/**
 * Created by yunhuan on 2016/12/16.
 */
var login=require("./login");
module.exports=function(app){
    app.get("/",function(req,res){
        res.render("index",{title:"index"});
    });
    app.get("/login",login);
    app.post("/loginInter",function(req,res){
        //对用户名进行判断
        var user=req.body.username;
        var pwd=req.body.password;
        var data;
            //正确跳转至loginInter地址,并输出data
        if(user=="huan"&& pwd=="123"){
            data={
                code:0,
                errmg:"",
                data:{
                    name:"aguai",
                    love:"zhazha"
                }
            }
            res.json(data);
        }else{//错误：留在原login页面
            data={
                code:1,
                errmg:"error"
            }
            //res.json(data);
            req.flash('error', '你输入错了，请重新输入!');
            res.redirect("/login");
        }
    });
};