/**
 * Created by yunhuan on 2016/12/12.
 */
//使用多进程完成读取文件和http静态资源加载
//思路：{
//        1.创建一个文件夹里面放几个文件
//        2.通过多进程模块判断主进程和子进程
//        3.在主进程中读取文件并且将读取的数据共享给子进程
//        1.子进程获取内创建http服务器并且将主进程共享的数据返回给浏览器显示
//}

var cluster=require("cluster");
var fs=require("fs");
var child_process=require("child_process");
var path=require("path");

var arr=["./demo1/file1.txt","./demo1/file2.txt"];
if(cluster.isMaster){//主进程
    //创建子进程
    var work=cluster.fork();
    //在主进程中读取文件
    var info=readfiles();
    //console.log(info);
    //主进程共享数据给子进程
    work.send({name:"aguai",age:21});
}else{//子进程
    //子进程获取内创建http服务器
    var runSever=child_process.spawn("node",["server.js"]);
    runSever.stdout.on("data",function(data){
        console.log(data.toString());
    });
    //子进程接收数据：
    process.on("message",function(data){
        console.log(data);

    });

}
//在主进程中读取文件的对象字面量
function readfiles(){
    for(var i=0; i<arr.length; i++){
        fs.readFile(arr[i],function(err,data){
            if(err) console.error(err);
            console.log(data.toString());
        })
    }
}
/*
var url="./demo1";
fs.readdir(url,function(err,data){
    if(err) return console.error(err);
    //遍历所有文件
    data.forEach(function(file){
        var filepath=path.join(url,file);
        fs.stat(filepath,function(err,stats){
            if(err)return console.error(err);
            console.log(stats)
        })

    })
})*/
