var fs=require("fs");
var dirname="etc";//�ļ���

var sourcepath="./a.txt";//ԭ�����ڵ��ļ�
var targetpath="./etc/a_copy.txt";//�´������ļ�
function direxistState(dirname,targetpath){
    //�ж��ļ����Ƿ����
    fs.exists(dirname,function(flag){
        if(flag) return console.log("this dir has already existed");
        //��������ڵĻ��������ļ���
        makedir(dirname);
    })
    //�ж��ļ��Ƿ����
    fs.exists(targetpath,function(flag){
        if(flag) return console.log("this file has already existed");
        //��������ڵĻ��������ļ�
        read_creat(sourcepath)
    })
}
function makedir(dirname){
    fs.mkdir(dirname,function(err){
        if(err) return console.error(err);
        console.log("make dir finished");
    })
}
    //�ȶ���ԭ���ģ��ٿ���һ���µ�
    function read_creat(filepath){
        fs.readFile(filepath,function(err,data){
            if(err) return console.error(err);
            console.log("read is finished");
            var data=data.toString()
            //���꣬��ʼд
            write(targetpath,data)
        })
    }
    function write(filepath,data){
        fs.writeFile(filepath,data,encoding="utf-8",function(err){
            console.log("write done");
        })
    }
direxistState(dirname,targetpath);
