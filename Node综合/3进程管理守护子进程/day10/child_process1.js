//如何守护子进程 

/*守护子进程的好处？：

 防止进程崩掉导致无响应
 当子进程崩掉可以使其重新启动
*/

//  比如我们启动了2个http的服务 ,然后我们通过主进程来控制这两个子进程,如这两个服务中其中有个是崩了,另一个他还会 执行的, 如果我们不守护子进程的话那我们这段程序就会崩掉 
//第一种启动方式
var fork=require("child_process").fork;  //首先我们先创建子进程

var appspath=["./child1.js","./child2.js"]   //里面放着我们要执行所有子进程js的文件

var workers={};

var createWorker=function(path){ //path指的是appspath 传过来的
	var worker=fork(path);  //这个是我们创建的子进程  
	console.log('create pid:'+worker.pid)  //创建好后我把他打印出来  在这里我们创建2个子进程


//当运行的appspath数组里的js文件报错时会触发一个退出事件，退出当前进程

	worker.on("exit",function(){  
		console.log("delete pid"+worker.pid); //当我退出子进程的时候就打印
		delete worker[worker.pid]  //删除workers对象里的报错的那个文件的进程中的pid,这个时候就不会增加worker 
		createWorker(path)  //删掉之后我们就在重启从新调用
	})

	workers[worker.pid]=worker;  //将创建成功的进程放入workers对象内
}

//我们遍历一下appspath
for(var i=0;i<appspath.length;i++){

	createWorker(appspath[i])//运行数组里的js文件
}
  
process.on("exit",function(){  //当我们在退出主进程的时候 并杀死所有的进程
	for(var pid in workers){
		workers[pid].kill()  
	}
})


//第二种启动方式
/*var cluster=require("cluster")  //多线程

if(cluster.isMaster){   //cluster.isMaster  判断他是不是主进程
	var worker=cluster.fork()

	setTimeout(function(){
		worker.kill()

	},1000)
	
	worker.on("exit",function(){
		console.log("rester")
		cluster.fork()
		
	})
}else{
	require('./child2.js')
	
}*/