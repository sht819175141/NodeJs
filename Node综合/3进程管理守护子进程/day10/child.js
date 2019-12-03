process.send({msg:"Hello"})  //发送
process.on("message",function(data){
	console.log(data)  //在子进程里接受一个(用message监听一个)
})