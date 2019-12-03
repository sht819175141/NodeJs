/** Created by yunhuan on 2016/12/12..*/
var express=require("express");
var router=express.Router();
router.get("/",function(req,res){
    res.send("this is a user page");
})
module.exports=router;