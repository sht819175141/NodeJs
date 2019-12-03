//process  全局对象

//console.log(process)

//process的属性
//console.log(process.pid)
//console.log(process.version)  //版本号
//console.log(process.title) 
//console.log(process.argv)

process.stdin.setEncoding('utf-8')//编码设置

process.stdin.on("readable",function(chunk){  //readable可读的数据

	//console.log("函数内部")
	var chunk=process.stdin.read()
	//console.log(chunk)
	if(typeof chunk ==="string"){
		var chun=chunk.length;
		console.log(chun)
		chunk=chunk.slice(0,-1)
	
	
	}
	if(chunk===""){
		
		process.stdin.emit("end")//开发一个end事件
		process.exit()
	}
	if(chunk!==null){
		//process.stdout.write('data:'+chunk)
		console.log("data:"+chunk)
		return;
	}


process.stdin.on("end",function(){   //在这里我就监听一个end的事件
	//stdin只有输入输出监听的事件
	console.log("end")
})

//退出的事件

process.on("exit",function(){  //process全局监听的
	console.log("exit success")
})


})


/*console.time("one")
function a(data){
	console.log(data)
}
function do1(agv,cb){
	a(agv)
	a(agv)
	a(agv)
	a(agv)
	a(agv)
	a(agv)
	
	function one(cb){
		console.log(cb)
	}
	one("cb")
}
do1("23","we")
console.timeEnd("one")*/
/*
console.time("two")
function b(data){
	console.log(data)
}
function do2(agv,cb){
	b(agv)
	b(agv)
	b(agv)
	b(agv)
	b(agv)
	b(agv)
	process.nextTick(cb)

}
console.timeEnd("two")*/