

var fs=require("fs");
var child_process=require("child_process");
var util=require("util");
var dirname="source";//�ļ���
var targetpath="source_copy";
var cmd=util.format("xcopy",dirname,targetpath);
//�ж��ļ�����״̬�Ķ���������
var direxistState=function(targetpath){
    //�ж��ļ����Ƿ����
    fs.exists(targetpath, function (flag) {
        if (!flag) {
            //����ļ��в����ڵĻ��������ļ���,�ٸ���
            makedir(targetpath);
            child_process.exec(cmd);
        }else{
            //������ڵĻ���ֱ�Ӹ���
            child_process.exec(cmd);
        }
    });
}
function makedir(targetpath){
    fs.mkdir(targetpath,function(err){
        if(err) return console.error(err);
        console.log("make dir finished");
    })
}
direxistState(targetpath);