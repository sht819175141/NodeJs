/**
 * Created by yunhuan on 2016/12/19.
 */
//ʹ��nodejs��ס����
    //˼·��Ҫ��
//1.����һ��main.js�ļ��������ӽ����ļ�
//2.�����ӽ����ļ��ֱ�Ϊ����http����͵�ȡmysql���ݿ�
//3.ʹ��main�ļ�ִ�������ӽ����ļ�
//4.���챨�������ڶ�ȡmysql���ļ����治����mysql��
//5.���ֱ���֮��node����������ǰ�������ļ���ֱ������mysql���ɹ�Ϊֹ

var cluster=require("cluster");
var child_process=require("child_process");
if(cluster.isMaster){
    cluster.fork();
    cluster.on("exit",function(){//重启
        cluster.fork();
    })
}else{
    require("./httpServer");
    require("./mysqlServer");
}














/*var runServer=child_process.spawn("node",["httpServer.js","mysqlServer.js"]);

 runServer.stdout.on("data",function(data){
 console.log(data.toString())
 })*/