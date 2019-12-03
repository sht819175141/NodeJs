/**
 * Created by yunhuan on 2016/12/10.
 */
/*
var user=function(request,respond){
    respond.send("this is a user page");
}
module.exports=user;
*/

//·¨¶þ£º
var express=require("express");
var router=express.Router();
router.get("/user",function(req,res){
    res.send("this is a user page");
})
module.exports=router;