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
var http=require("http");
var path=require("path");
//var arr=["./demo1/file1.txt","./demo1/file2.txt"];
var info="";
var url="./demo1";
//ͨ�������ģ���ж������̺��ӽ���
if(cluster.isMaster){//������
    // �����ӽ���
    var worker=cluster.fork();
    //���������ж�ȡ�ļ�
    //��һ��
    /*for(var i=0; i<arr.length; i++){
        fs.readFile(arr[i],function(err,data){
            if(err) console.error(err);
            //�����̹������ݸ��ӽ���
            worker.send({"name":data.toString()});
            //console.log(info)
        })
    }*/
    //������
    fs.readdir(url,function(err,data){
        if(err) return console.error(err);
        //��ȡ�ļ�
        data.forEach(function(file){
            //var fileName= path.join(__dirname,url,path.sep,file);
            var fileName=path.join(url,file);
            console.log(fileName);
            fs.readFile(fileName,function(err,data){
                if(err) return console.error(err);
                //console.log(data.toString());
                //���������ӽ��̴�������
                worker.send({"name":data.toString()});
            })
        })
    })

}else{//�ӽ���
    //�ӽ��̽������ݣ�
    process.on("message",function(data){
        //����ȫ�����ݣ�+=
        info+=data.name
    });
    //�ӽ��̻�ȡ�ڴ���http������
    http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
        //����������ݷ��ظ��������ʾ
        res.end(info);
    }).listen(8090,function(){
        console.log("listen port at 8090");
    });
}
//���ֵ����⣺
//1��message���ղ��������̷��������:��ȡ�ļ�����д�����������ݣ��Ҳ�д�ɺ�����ʽ��infoΪһ��ȫ�ֵı�����
//2����ȡ�ļ�������������ļ������ַ�ʽ��foreach��forѭ��
// ����ȫ�����ļ��ã�+=
//3������������ݷ��ظ��������ʾ��res.end()[����������ò�Ҫ��дһ��ҳ��server.js��]

