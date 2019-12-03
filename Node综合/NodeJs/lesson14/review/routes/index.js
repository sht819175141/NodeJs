/**
 * Created by yunhuan on 2016/12/12.
 */
/*var express=require("express");
var router=express.Router();
router.get("/",function(req,res){
    res.send("this is a index page");
});
module.exports=router;*/
//var index=require("./index");
var user=require("./user");
var about=require("./about");
module.exports=function(app){
    //app.use("/",index);
    app.use("/user",user);
    app.use("/about",about);
}
