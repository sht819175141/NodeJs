//3、标准输入输出，监听输入状态，输入完成退出进程（emit）
process.stdout.write("out\n");
process.stderr.write("err\n");
process.stdin.on("data",function(data){
    console.log(data.toString());
    //退出输入程序：
    process.stdin.emit("end");
})
//监听输入程序的退出：
process.stdin.on("end",function(){
    console.log("stdin end finished")
});