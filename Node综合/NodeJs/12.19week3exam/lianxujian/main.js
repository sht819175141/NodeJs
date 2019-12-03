/**
 * Created by Administrator on 2016/12/19.
 */
const child_process=require('child_process');
var fork=child_process.fork;
var arr=['./mysql.js','./server.js'];
//守护子进程的函数
function protect_child(file){
    var child_fork=fork(file);
    //监听子进程的退出事件
    child_fork.on('exit',function(){
    	//异常退出重启
        protect_child(file);

    })
}
//for循环遍历所有文件
for(var i=0;i<arr.length;i++){
    protect_child(arr[i]);
}