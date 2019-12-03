/**
 * Created by yunhuan on 2016/12/14.
 */

var home=require("./home");
var user=require("./user");
module.exports=function(app){
    app.get("/",function(req,res){
        res.render("index");
    });
    app.get("/user",user);
    app.get("/home",home);
}