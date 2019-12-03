//˼·��
//ʵ���ļ�����Ч�����������ļ���С�ļ���
//1.�����ļ���ȡ����������ļ�
//2�������µ��ļ��У����жϴ���״̬
//3��.��stats.size�����ж��ļ���С{
    //����ļ�����1mb��ʹ����������ȡ
    //����ļ�С��1mb��ʹ��fs.readfile��ȡ
//}
//4.�ж϶�ȡ���ļ���ʲô��׺�����������׺��
//5.����ȡ���ļ������������һ���ļ���

//1����������ģ���
var fs=require("fs");
var path=require("path");

var newdir="./copydemo";
var bPath="./demo/big.mp4";
var sPath="./demo/small.txt";

//2��������ȡ�ļ����µ��ļ���������
var url="./demo";
var readDirall=function(url){
    fs.readdir(url,function(err,data){
        if(err) return console.error(err);
        //���������ļ�
        data.forEach(function(file){
            //console.log(file)
            //�õ��ļ��ĺ�׺��
            var end=path.extname(file);
            var filepath=path.join(url,file);
            //console.log(filepath);
            fs.stat(filepath,function(err,stats){
                if(err)return console.error(err);
                //console.log(stats.size)//�õ��ļ�����Ĵ�С�����ֽ�Ϊ��λ
                //�ж��ļ���С
                if(stats.size/1024/1024>1){
                    readBfilr(bPath,end)
                }else{
                    readSfilr(sPath,end);
                }
            })
        })
    })
}
readDirall(url);
//3������һ���ļ���
/*function makedir(newdir){
    fs.mkdir(newdir,function(err){
        if(err) return console.error(err);
        console.log("make dir finished");
    })
}
makedir(newdir)*/

function direxistState(newdir){
    //�ж��ļ����Ƿ����
    fs.exists(newdir, function (flag) {
        if (flag) return console.log("this dir has already existed");
        //��������ڵĻ��������ļ���
        makedir(newdir);
    })
}
function makedir(newdir){
    fs.mkdir(newdir,function(err){
        if(err) return console.error(err);
        console.log("make dir finished");
    })
}
direxistState(newdir);
//4����ȡ�ļ�����������һ���ļ�����
    //��ȡ���ļ�������
function readBfilr(bPath,end){

    var readStream=fs.createReadStream(bPath);
    var writeStream=fs.createWriteStream("./copydemo/newBig.mp4");
    readStream.pipe(writeStream)
    console.log("read big file and copy big file finished,file type is"+end);
}
    //��ȡС�ļ�������
function readSfilr(sPath,end){
    fs.readFile(sPath,function(err,data){
        if(err) return console.error(err);
        console.log("read small file finished and file type is"+end);
        //����С�ļ�
        var data=data.toString();
        writeSfilr(data);
    })
}
function writeSfilr(data){
    fs.writeFile("./copydemo/newSmall.txt",data,encoding="utf-8",function(err){
        if(err) return console.error(err);
        console.log("copy small file finished");
    })
}