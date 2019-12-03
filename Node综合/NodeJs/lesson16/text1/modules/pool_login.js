/**
 * Created by shi on 2016/12/14.
 */
//这个文件的作用就是连接数据库
//引入mysql模块
var mysql=require("mysql");
//引入创建连接的配置
var option=require("../configs/sqlconf");
//创建连接池
var pool=mysql.createPool(option);

//连接数据库
pool.getConnection(function(err,connection){
   if(err) return console.error(err);
    //抛出一个方法主要用于传参 接收userlogin.js里的username password
    module.exports.login=function(username,password,callback){
        //设置查询语句
        var queryString='select * from login where username=\''+username+'\'and password=\''+password+'\'';
        //执行查询语句
        connection.query(queryString,function(err,result){  //rows是数组

            callback(err,result);
            //抛出json数据 目的是让路由接收它
            //在两个模块之间传递数据 只这样赋值是传不过去的
            //module.exports=rows;

            //应该给它的属性赋值 这是一个小技巧 必须会用 知道才可以
           // module.exports.result=rows;
            //console.log(rows);
        })

    }

})