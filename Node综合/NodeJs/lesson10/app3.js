//三、守护子进程：重启
var cluster=require("cluster");
var http=require("http");
var count=0;//重启次数
if(cluster.isMaster){//主进程
    //创建一个子进程
    cluster.fork();
    //监听cluster的exit事件：实现重启子进程（即新建子进程）
    cluster.on('exit',function(){
        if(count>1) return;//如果大于3次则不再重启
        cluster.fork();//重启
        count++;
    })
}else{//子进程
    //启动一个http网络服务
    http.createServer(function(request,response){
        response.end("child process");
    }).listen(8090,function(){
        console.log("listen port at 8090")
    })
    aa()

}

//第一次执行完就会报错：所以在count=0时已经执行过一次else里面的程序，所以第一次报错时相当于 已经重启过一次了
