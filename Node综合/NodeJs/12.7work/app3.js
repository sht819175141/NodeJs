//守护子进程：重启
var cluster=require("cluster");
var http=require("http");
var count=0;//重启次数
if(cluster.isMaster){//主进程
    //创建一个子进程
    cluster.fork();
    //监听cluster的exit事件
    cluster.on('exit',function(){
        if(count>1) return;//如果大于3次则不再重启
        cluster.fork();//重启
        count++;
    })
}else{//子进程
    //启动一个http网络服务P:子进程中创建服务
    http.createServer(function(request,response){
        response.end("child process");
    }).listen(8090,function(){
        console.log("listen port at 8090")
    })
    error()//报错

}
//思路：
1、引入cluster模块
2、判断是否是主进程
3、在主进程中创建子进程
4、子进程中创建服务（服务出现错误，才需要守护）
5、监听子进程的服务
6、在监听事件回调中重启子进程