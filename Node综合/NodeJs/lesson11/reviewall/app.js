/**
 * Created by yunhuan on 2016/12/8.
 */
//--------ʵ�ֶ���̺��ӽ���
/*
var os=require("os");
var cluster=require("cluster");
var child_process=require("child_process");

var cpuslength=os.cpus().length;
//�ж�cpu�ں���
if(cpuslength<2){
    return;
}else{
    //�жϽ���
    if(cluster.isMaster){//������
        //�����ӽ���
        cluster.fork();//
    }else{//�ӽ���
        //����һ���ӽ��̣���������һ��http����
        var run=child_process.spawn("node",["httpServer.js"])
        //������������ʱ����������¼������������
        run.stdout.on("data",function(data){
            console.log(data.toString());//listen port at 8090
        })
    }
}

//ֻ������http�����޷�����������Ǿ仰��listen 8080����һ���������գ�������stdout�������������ſ��Խ��յ�
/!*
���������洴�����ӽ������ӽ������洴�����ӽ��̺��岻ͬ��
�жϽ��̵õ��ĵ�ǰ���������̣�����ֻ�������������洴�����ӽ��̣�����Ż���else����*!/


//---------��׼���������
process.stdout.write()
process.stderr.write()
process.stdin.on("data",function(data){
    console.log(data);
    //�˳��������
    process.stdin.emit("end");
})
//����������˳���
process.stdin.on("end",function(){
    console.log("stdin end finished")
});
*/

//----------����һ���ӽ��̣����ػ��ӽ���
var cluster=require("cluster");
var http=require("http");
if(cluster.isMaster){
    cluster.fork();
}else{
    //����һ������
    http.createServer(function(req,res){
       res.end("run server is finished");
    }).listen(8080,function(){
        console.log("listen at port 8080");
    });
}