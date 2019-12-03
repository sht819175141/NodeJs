/**
 * Created by shi on 2016/12/14.
 */
//思路：
// 1.引入数据库
// 2.创建路由 引用数据库抛出的方法判断是否与数据库数据匹配 路由抛出json数据在页面显示

var userlogin=require("../modules/pool_login");
var express=require("express");
var router=express.Router();

router.post("/userlogin",function(req,res){
    //在这获取到username和password是要传到modules里的pool_login.js 去拼接查询的语句
    var username=req.body.username;
    var password=req.body.password;
    var rows;
    userlogin.login(username,password,function(err,result){
        if(err) return console.error(err);
        if(result.length){  //有数据  匹配成功
            //在实际工作开发中应该返回一个json数据
            //八维教学简单化只返回一个数据
            //console.log(result[0]);
            rows={
                code:0,  //成功
               // errMsg:"", //没有错误
                result:result[0]  //结果为匹配到的数据
            }
        }else{ //没有数据 即没有匹配的结果
            rows={
                code:1, //失败
                errMsg:"error"  //有错误
            }
        }

        //console.log(rows);
        res.json(rows);
    })
})
module.exports=router;