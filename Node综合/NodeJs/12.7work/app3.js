//�ػ��ӽ��̣�����
var cluster=require("cluster");
var http=require("http");
var count=0;//��������
if(cluster.isMaster){//������
    //����һ���ӽ���
    cluster.fork();
    //����cluster��exit�¼�
    cluster.on('exit',function(){
        if(count>1) return;//�������3����������
        cluster.fork();//����
        count++;
    })
}else{//�ӽ���
    //����һ��http�������P:�ӽ����д�������
    http.createServer(function(request,response){
        response.end("child process");
    }).listen(8090,function(){
        console.log("listen port at 8090")
    })
    error()//����

}
//˼·��
1������clusterģ��
2���ж��Ƿ���������
3�����������д����ӽ���
4���ӽ����д������񣨷�����ִ��󣬲���Ҫ�ػ���
5�������ӽ��̵ķ���
6���ڼ����¼��ص��������ӽ���