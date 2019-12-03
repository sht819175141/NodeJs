/**
 * Created by yunhuan on 2016/12/18.
 */
var user=require("../modules/user")
var express=require("express");
var router=express.Router();
router.post("/inter",function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    user(username,password,res,req)
})
module.exports=router;