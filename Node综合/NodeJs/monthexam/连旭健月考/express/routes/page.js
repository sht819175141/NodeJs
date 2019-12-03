/**
 * Created by Administrator on 2016/12/22.
 */
const express=require('express');
var router=express.Router();

router.get('/page',function(req,res){
    var data=req.query;
    res.jsonp(data);
})
module.exports=router;