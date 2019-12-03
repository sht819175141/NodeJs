/**
 * Created by shi on 2016/12/14.
 */
//这个文件的作用就是连接数据库
//引入mysql模块
var mysql=require("mysql");
//引入创建连接的配置
var option=require("../configs/sqlconf");
//创建数据库连接
var connection=mysql.createConnection(option);
//连接数据库
connection.connect();
//设置查询语句
var queryString="select * from login";
//执行查询语句   result为查询到的结果
connection.query(queryString,function(err,result){
    if(err) return console.error(err);
    console.log(result);
})
//关闭数据库
connection.end();


