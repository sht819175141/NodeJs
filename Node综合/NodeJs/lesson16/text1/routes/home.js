/**
 * Created by shi on 2016/12/14.
 */
//��Ⱦҳ��
var express=require("express");
var router=express.Router();

router.get("/",function(req,res){
        res.render("index");
})
module.exports=router;