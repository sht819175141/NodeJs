const child_process=require("child_process")  //子线程模块
const util=require("util")//有缝拼接模块
const os=require("os")//系统的一些方法
const cluster=require("cluster") //多线程模块
//child_process.exec可以实现了一个copy文件
/*function copy(soure,target,callback){  //linux 系统用cp -r  
	var cp=util.format("copy -x",soure,target)
	//console.log(cp)
	child_process.exec(cp,callback)  //分配一个子进程  callback是我这个函数传给我的callback

}

copy("a","b",function(err){
	console.log(err)
})*/

/*var options={
	encoding:"utf-8",
	maxBuffer:100*100
}
var cat=child_process.exec("dir",options,function(err,stdout,stderr){  //调终端命令

	console.log(stdout)
})
*///console.log(cat)

//如何创建子进程
/*var cat=child_process.spawn("node",["c.js"]);

cat.stdout.on("data",function(chunk){
	
	console.log(chunk.toString())
})
cat.on("exit",function(){
	console.log("dfdfdf")
})
cat.stdin.write("start")*/
//cat.stdin.end()


//console.log(cluster)

//多线程

var cl=os.cpus().length;  //获取cpu的长度
var data=0;
if(cluster.isMaster){ //isMaster 判断他是不是主进程   主进程和子进程不共享  如果在主进程中改变些数据那么他在子进程中获取的还是原来初始的那个值
	
	for(var i=0;i<cl;i++){      
		var prcess_worker=cluster.fork();  //我们先在主进程中分配几个子进程
		prcess_worker.send({msg:"hello"})  //子进程发送  进程之间还可以通讯
		prcess_worker.on("message",function(msg){  //那我们就在主进程里接受
			console.log(msg)
		})  
	}
	data++;
	//console.log("num is master:"+i)
}else{
	//子进程
	data++;
	//console.log("num:... ..."+i)
	//console.log("id:"+cluster.worker.id+"num: ... ..."+data)
	process.on("message",function(msg){  //message  接收  (监听 message事件)
		console.log(msg)  //我们就可收到几个mag
	})
	process.send({msg:"Hello"})  // 同样我们还可以在子进程了里发送

}

/*var cl=os.cpus().length;  //cpu是我的电脑有几核
var data=0;
if(cluster.isMaster){ //isMaster 判断他是不是主进程   主进程和子进程不共享
	
	for(var i=0;i<cl;i++){
		cluster.fork();  //几个子进程
		 
	}
	data++;
	console.log("num is master:"+i)
}else{
	data++;
	//console.log("num:... ..."+i)
	console.log("id:"+cluster.worker.id+"num: ... ..."+data)  //cluster.worker.id通过他我们可以来区别是那个进程 ,而且每个进程和每个进程是不一样的
	process.exit()  //手动退出

}

//退出的时候可以监听
process.on("exit",function(){
	console.log("end")
})

*/


