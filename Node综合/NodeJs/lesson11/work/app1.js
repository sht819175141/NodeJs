/**
 * Created by yunhuan on 2016/12/8.
 */
//1、守护紫禁城
var cluster=require("cluster");
var http=require("http");
var count=0;//重启次数
if(cluster.isMaster){//主进程
    cluster.fork();
    //监听cluster的exit事件
    cluster.on('exit',function(){
        if(count>1) return;//如果大于3次则不再重启
        cluster.fork();//重启
        count++;
    })
}else{//子进程
    //启动一个http网络服务:子进程中创建服务
    http.createServer(function(request,response){
        response.end("child process");
    }).listen(8090,function(){
        console.log("listen port at 8090")
    })
    error()//报错

}