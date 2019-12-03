/**
 * Created by yunhuan on 2016/12/14.
 */
//-------链接数据库法二：



//引入mysql模块:
var mysql=require("mysql");
//创建链接的配置
var options=require("../configs/config");
//创建一个数据库连接：
var pool=mysql.createPool(options);
//连接数据库[[异步方法]]：
var rows;
pool.getConnection(function(err,connection){
    if(err) return console.error(err);
    //执行查询语句：
    connection.query("select * from login",function(err,rows){
        if(err) return console.error(err);
        if(rows.length>0){
            //console.log(rows[0]);
            rows={
                code:0,
                errmsg:"",
                result:rows[0]
            }
        }else{
            rows={
                code:1,
                errmsg:"error"
            }
        }
        module.exports=rows;
        console.log(rows)
        //断开数据库连接
        connection.release();//????
    });
});
