/**
 * Created by yunhuan on 2016/12/8.
 */
//1���ػ��Ͻ���
var cluster=require("cluster");
var http=require("http");
var count=0;//��������
if(cluster.isMaster){//������
    cluster.fork();
    //����cluster��exit�¼�
    cluster.on('exit',function(){
        if(count>1) return;//�������3����������
        cluster.fork();//����
        count++;
    })
}else{//�ӽ���
    //����һ��http�������:�ӽ����д�������
    http.createServer(function(request,response){
        response.end("child process");
    }).listen(8090,function(){
        console.log("listen port at 8090")
    })
    error()//����

}