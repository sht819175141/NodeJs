/**
 * Created by Administrator on 2016/12/22.
 */
const express=require('express');
var router=express.Router();

router.get('/home',function(req,res){
    res.render('index');
})
module.exports=router;