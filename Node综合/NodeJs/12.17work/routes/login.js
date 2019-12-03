/**
 * Created by yunhuan on 2016/12/18.
 */

var express=require("express");
var router=express.Router();
router.get("/login",function(req,res){
    res.render("login",{title:"login"});
})
module.exports=router;