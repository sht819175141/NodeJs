/**
 * Created by yunhuan on 2016/12/8.
 */
//domain����׽�첽�ص��г��ֵ��쳣

//-------���룺
//����domainģ��
var domain=require("domain");
/*//����domainʵ��
var oDomain=domain.create();

//�첽�쳣��
function async(){
    setTimeout(function(){
        throw new Error("async error");
    });
}
//�������һ���������൱��try
oDomain.run(async);
//ͨ��domain.on("error",callback)������������첽�쳣���൱��catch
oDomain.on("error",function(err){
    console.log(err);
});*/


//-------ʹ��һ��domain��

//��һ��domain.run()�����ɴ�����
//domain.run(fn):ʹ��domain����÷�ʽ,(��������
var d = domain.create();
var fs = require("fs");
function readSomeFile(){
    fs.readFile("./aa.txt", function(err,data){
        if(err) return console.error(err);
        console.log(data.toString());
        //�״�error();
    });
}
d.run(readSomeFile);
d.on("error",function(err){
    console.log(err);
});

//������domain.bind(cb)��ͨ��bind����returnһ���ص�������try���̣��������Ϳ��Դ��ݲ�����
// ͨ��error��׽�쳣��catch����)

var d = domain.create();
var fs = require("fs");

function readSomeFile(filename, callback) {
    fs.readFile(filename, d.bind(function(er, data) {
        // if this throws, it will also be passed to the domain
        return callback(er, data);
    }));
    /*�Ϸ���������readSomeFile��һ���ص���������callback�ʹ�����readSomeFile��
     readSomeFile�ֽ�������������ˣ�����
     fs.readFile(filename, function(err,data){
     if(err) return console.error(err);
     console.log(data.toString());
     });*/
}
//����ʵ��,����
readSomeFile("./aa.txt",function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
    a()
})
//ͨ��domain.on("error",callback)������������첽�쳣
d.on('error', function(er) {
    //console.log(er);
    //ͨ���򲶻�һ������{ ReferenceError: a is not defined����}�����򱨴� a()
});
