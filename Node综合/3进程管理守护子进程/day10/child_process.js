//主进程子进程之间的资源不共享  还可以互相通信
const child_process=require("child_process")  //子线程模块
const util=require("util")//有缝拼接模块
const os=require("os")
const cluster=require("cluster") //多线程模块

//message  接收信息
var child=child_process.fork("./child.js") //fork运行child.js
child.on("message",function(data){  //message监听接收事件 (接受子进程发过的信息)                                                                    
	console.log(data)  
})

child.send({msg:"hello"}) //在主进程里发送一个





