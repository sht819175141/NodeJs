/**
 * Created by yunhuan on 2016/12/19.
 */
//1.使用nodejs守住进程
//1.创建一个main.js文件和两个子进程文件
//2.两个子进程文件分别为创建http服务和调取mysql数据库
//3.使用main文件执行两个子进程文件
//1.制造报错场景：在读取mysql的文件里面不引入mysql包
//2.出现报错之后node不断重启当前报错子文件，直到引入mysql包成功为止

var cluster=require("cluster");
var child_process=require("child_process");
var mysql=require("./mysqlServer");
if(cluster.isMaster){
    var worker=cluster.fork();
    cluster.on("exit",function(){
        cluster.fork();
    })
}else{
    var runServer1=child_process.spawn("node",["httpServer.js"]);
    var runServer2=child_process.spawn("node",["mysqlServer.js"]);
    runServer1.stdout.on("data",function(data){
        console.log(data.toString());
    })
    runServer2.stdout.on("data",function(data){
        console.log(data.toString());
    })
}















