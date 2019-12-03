//异常状态 捕捉到异常 同步异常 异步异常
var domain=require("domain")  //引入域模块  //处理异步异常

var d=domain.create();  //创建一个域
function sync_err(){
	var r=Math.random()*10;
	if(r>5){
		throw new Error("random num:"+r+">5")
	}
	console.log("random is:"+r)
}


function async_err(){
	setTimeout(function(){  //延时阻止了
		var r=Math.random()*10;
		if(r>5){
			throw new Error("random is:"+r+">5")
		}
		console.log("random is:"+r)
	},10)
	
}

setInterval(function(){
	try{    //一旦大于5的时候 就报错不走了 说明try  catch 捕捉不到异步的异常
		d.run(sync_err)
		d.run(async_err)  //d.run 帮我们执行同步和异步的代码
		/*sync_err()
		async_err()*/
	}catch(e){
		console.log(e)
	}
	
},1000)

d.on("error",function(err){
	console.log(err)
})
//uncaughException //全局异常事件 
/*process.on("uncaughtException",function(err){   //一旦有错uncaughtException就监听到打听了
	console.log(err)
})
*/
