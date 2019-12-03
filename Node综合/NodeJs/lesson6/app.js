//�������ö���path
var path=require("path");

//���path��api
//console.log(path);



//path.resolve([from ...], to)���������·��
var respath=path.resolve('../NodeJs/lesson6/review', '../note.txt');
console.log(respath);//F:\��ά�μ�\��ʮ����Nodejs\NodeJs\lesson6\note.txt
var respath=path.resolve('../NodeJs/lesson6/review', './note.txt');
console.log(respath);//F:\��ά�μ�\��ʮ����Nodejs\NodeJs\lesson6\review\note.txt
//path.relative(from, to)��������·��???
var relpath=path.relative('../NodeJs/lesson6/review','../note.txt');
console.log(relpath);//..\..\..\note.txt
var relpath=path.relative('../NodeJs/lesson6/review','./note.txt');
console.log(relpath);//..\..\..\lesson6\note.txt


/*
var fs=require("fs");
//console.log(fs.stat)//���fs��״̬
fs.stat("./note.txt",function(err,stats){
    //console.log(stats)
    //�ж��ļ���С
    if(stats.size/1024/1024>1){
        console.log("bigger than file")
    }else{
        console.log("smaller than file")
    }
})*/
