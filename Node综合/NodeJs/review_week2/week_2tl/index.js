// 1.	编写两个子进程文件（两个http服务）通过主进程分配两个子进程来执行上面的两个http服务。如果其中一个子进程崩掉不影响主进程的代码逻辑，并且主进程不断使崩掉的子进程重启。
//            1.1.崩掉的子进程应不影响另一个子进程的运行
//            1.2.为性能考虑重启崩掉的子进程时应考虑内存中启动太多的进程，应该在其	崩掉之后立刻杀掉进程再重启
// 2.	完成捕捉代码异常功能，包括同步异常以及异步异常
// 	          2.1.实现同步异常并且捕获
//            2.2实现异步异常并且捕获
//            2.3.要求使用domain模块来捕捉


const child_process = require('child_process'),
       domain=require("domain"),
       fork=child_process.fork;
var doing=domain.create();
var arr = ["server.js", "server1.js"];
var n=0;
//-----------------------创建子进程
function createfork(path) {
    var work = fork(path);
    work.on("exit", function () {
        n++;
        console.log("error")
        createfork(path)
        if(n>3){
            work.kill()
            createfork(path)
        }
    })

}
function inof(arr) {
    for (var i = 0; i < arr.length; i++) {
        createfork(arr[i])
    }
}
inof(arr)

//-------------------同步捕获错误

try{
    for (var i = 0; i < 8; i++) {
       if (i>5) {
        throw new Error("that is error")
       };
    };
}catch (err){
    console.log("that "+err)
}

//--------------------异步  捕获错误
function bufor () {
        for (var i = 0; i < 8; i++) {
            (function(i){
                setTimeout(function(){
                     if (i>5) {
                        throw new Error("that is error")
                    };
                 },1000+parseInt(Math.random()*100))
            })(i)      
        }
}
doing.run(bufor)
doing.on("error", function (data) {
        console.log("that "+data)
})
