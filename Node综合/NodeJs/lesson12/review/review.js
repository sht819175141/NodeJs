/**
 * Created by yunhuan on 2016/12/9.
 */
//--------domain�����쳣
var domain=require("domain");//����domainģ��
var fs=require("fs");
var oDomain=domain.create();//����domainʵ��
function readfiles(path,callback){
    fs.readFile(path,oDomain.bind(function(err,data){
        return callback(err,data);
    }));
};
readfiles("./aa.txt",function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
    error();
});
/*oDomain.on("error",function(err){
    console.log(err);//�����errΪʵ�ʲ��񵽵Ĵ�������������ҳ���������У�������ֶ��������Ǵ����뱨��ͬ
})*/
//ͨ��domain����һ���첽���󣬵õ�һ�����󣻷�����״�error()