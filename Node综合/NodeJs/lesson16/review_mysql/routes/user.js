/**
 * Created by yunhuan on 2016/12/14.
 */
var express=require("express");
var router=express.Router();
router.get("/user",function(req,res){
    res.render("index");
});
module.exports=router;