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
var http=require("http");
var path=require("path");
//var arr=["./demo1/file1.txt","./demo1/file2.txt"];
var info="";
var url="./demo1";
//通过多进程模块判断主进程和子进程
if(cluster.isMaster){//主进程
    // 创建子进程
    var worker=cluster.fork();
    //在主进程中读取文件
    //法一：
    /*for(var i=0; i<arr.length; i++){
        fs.readFile(arr[i],function(err,data){
            if(err) console.error(err);
            //主进程共享数据给子进程
            worker.send({"name":data.toString()});
            //console.log(info)
        })
    }*/
    //法二：
    fs.readdir(url,function(err,data){
        if(err) return console.error(err);
        //读取文件
        data.forEach(function(file){
            //var fileName= path.join(__dirname,url,path.sep,file);
            var fileName=path.join(url,file);
            console.log(fileName);
            fs.readFile(fileName,function(err,data){
                if(err) return console.error(err);
                //console.log(data.toString());
                //主进程向子进程传递数据
                worker.send({"name":data.toString()});
            })
        })
    })

}else{//子进程
    //子进程接收数据：
    process.on("message",function(data){
        //接收全部数据：+=
        info+=data.name
    });
    //子进程获取内创建http服务器
    http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        //将共享的数据返回给浏览器显示
        res.end(info);
    }).listen(8090,function(){
        console.log("listen port at 8090");
    });
}
//出现的问题：
//1、message接收不到主进程分享的数据:读取文件里面写发送数据数据，且不写成函数形式【info为一个全局的变量】
//2、读取文件夹里面的所有文件有两种方式：foreach和for循环
// 分享全部的文件用：+=
//3、将共享的数据返回给浏览器显示用res.end()[所以这种最好不要再写一个页面server.js了]

