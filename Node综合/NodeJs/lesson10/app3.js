//�����ػ��ӽ��̣�����
var cluster=require("cluster");
var http=require("http");
var count=0;//��������
if(cluster.isMaster){//������
    //����һ���ӽ���
    cluster.fork();
    //����cluster��exit�¼���ʵ�������ӽ��̣����½��ӽ��̣�
    cluster.on('exit',function(){
        if(count>1) return;//�������3����������
        cluster.fork();//����
        count++;
    })
}else{//�ӽ���
    //����һ��http�������
    http.createServer(function(request,response){
        response.end("child process");
    }).listen(8090,function(){
        console.log("listen port at 8090")
    })
    aa()

}

//��һ��ִ����ͻᱨ��������count=0ʱ�Ѿ�ִ�й�һ��else����ĳ������Ե�һ�α���ʱ�൱�� �Ѿ�������һ����
