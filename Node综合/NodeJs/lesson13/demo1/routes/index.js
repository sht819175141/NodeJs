/**
 * Created by yunhuan on 2016/12/10.
 */
/*
var index=function(request,respond){
    respond.send("this is a index page");
}
module.exports=index;*/

//·¨¶þ£º
var express=require("express");
var router=express.Router();
router.get("/",function(req,res){
    res.send("this is a index page");
})
//module.exports=router;
exports.router=router;

