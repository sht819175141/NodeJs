/**
 * Created by yunhuan on 2016/12/8.
 */
//--------实现多进程和子进程
/*
var os=require("os");
var cluster=require("cluster");
var child_process=require("child_process");

var cpuslength=os.cpus().length;
//判断cpu内核数
if(cpuslength<2){
    return;
}else{
    //判断进程
    if(cluster.isMaster){//主进程
        //创建子进程
        cluster.fork();//
    }else{//子进程
        //创建一个子进程，用于启动一个http服务
        var run=child_process.spawn("node",["httpServer.js"])
        //当有数据流出时，监听输出事件，并输出内容
        run.stdout.on("data",function(data){
            console.log(data.toString());//listen port at 8090
        })
    }
}

//只是启动http服务，无法输出监听的那句话：listen 8080，用一个变量接收，并监听stdout的数据流出，才可以接收到
/!*
主进程里面创建的子进程与子进程里面创建的子进程含义不同：
判断进程得到的当前处于主进程，所以只有在主进程里面创建了子进程，程序才会走else里面*!/


//---------标准输入输出：
process.stdout.write()
process.stderr.write()
process.stdin.on("data",function(data){
    console.log(data);
    //退出输入程序：
    process.stdin.emit("end");
})
//监听输入的退出：
process.stdin.on("end",function(){
    console.log("stdin end finished")
});
*/

//----------创建一个子进程，并守护子进程
var cluster=require("cluster");
var http=require("http");
if(cluster.isMaster){
    cluster.fork();
}else{
    //创建一个服务
    http.createServer(function(req,res){
       res.end("run server is finished");
    }).listen(8080,function(){
        console.log("listen at port 8080");
    });
}