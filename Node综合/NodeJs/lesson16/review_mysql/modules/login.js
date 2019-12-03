/**
 * Created by yunhuan on 2016/12/14.
 */
//-------链接数据库法一：



//引入mysql模块:
var mysql=require("mysql");
//创建链接的配置
var options=require("../configs/config");
//创建一个数据库连接：
var connection=mysql.createConnection(options);
//连接数据库[同步方法]
connection.connect();
//执行查询语句：
connection.query("select * from login",function(err,data){
    if(err) return console.error(err);
    console.log(data[0]);//得到的是数组
});
//断开数据库连接
connection.end();
