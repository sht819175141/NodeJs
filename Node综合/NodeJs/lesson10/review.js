//��ϰ��
//����ģ�飺
var http=require("http");
var path=require("path");
var net=require("net");
var fs=require("fs");
var url=require("url");
var util=require("util");
var zlib=require("zlib");
var child_process=require("child_process");



//process ȫ�ֶ���

//1����׼�������
/*process.stdout.write("121\n");
process.stderr.write("err\n");
process.stdin.on("data",function(data){
    console.log("stdin data is "+data);
    //process.kill():ɱ��һ�����̣�ͬʱ������Ч��pid
    //process.exit():�������н���
})*/
//2���˳�����
    //1���¼�������:��������״̬��end�¼�
/*process.stdin.on("data",function(data){
    console.log(data.toString());
    process.stdin.emit("end")
})
process.stdin.on("end",function(){
    console.log("stdin emit end")
})*/
    //2)exit()������exit�¼�
process.stdin.on("data",function(data){
    console.log("stdin data is "+data);
    process.exit();
})
process.on("exit",function(code){
    //console.log(code)
    console.log("process is exit "+code);
})
