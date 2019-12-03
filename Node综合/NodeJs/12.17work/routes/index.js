/**
 * Created by yunhuan on 2016/12/18.
 */
var login=require("./login");
var inter=require("./inter");
module.exports=function(app){
    app.get("/",function(req,res){
        res.send("test");
    });
    app.get("/login",login);
    app.post("/inter",inter)
}