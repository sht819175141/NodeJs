/**
 * Created by yunhuan on 2016/12/12.
 */
//ʹ�ö������ɶ�ȡ�ļ���http��̬��Դ����
//˼·��{
//        1.����һ���ļ�������ż����ļ�
//        2.ͨ�������ģ���ж������̺��ӽ���
//        3.���������ж�ȡ�ļ����ҽ���ȡ�����ݹ�����ӽ���
//        1.�ӽ��̻�ȡ�ڴ���http���������ҽ������̹�������ݷ��ظ��������ʾ
//}

var cluster=require("cluster");
var fs=require("fs");
var child_process=require("child_process");
var path=require("path");

var arr=["./demo1/file1.txt","./demo1/file2.txt"];
if(cluster.isMaster){//������
    //�����ӽ���
    var work=cluster.fork();
    //���������ж�ȡ�ļ�
    var info=readfiles();
    //console.log(info);
    //�����̹������ݸ��ӽ���
    work.send({name:"aguai",age:21});
}else{//�ӽ���
    //�ӽ��̻�ȡ�ڴ���http������
    var runSever=child_process.spawn("node",["server.js"]);
    runSever.stdout.on("data",function(data){
        console.log(data.toString());
    });
    //�ӽ��̽������ݣ�
    process.on("message",function(data){
        console.log(data);

    });

}
//���������ж�ȡ�ļ��Ķ���������
function readfiles(){
    for(var i=0; i<arr.length; i++){
        fs.readFile(arr[i],function(err,data){
            if(err) console.error(err);
            console.log(data.toString());
        })
    }
}
/*
var url="./demo1";
fs.readdir(url,function(err,data){
    if(err) return console.error(err);
    //���������ļ�
    data.forEach(function(file){
        var filepath=path.join(url,file);
        fs.stat(filepath,function(err,stats){
            if(err)return console.error(err);
            console.log(stats)
        })

    })
})*/
