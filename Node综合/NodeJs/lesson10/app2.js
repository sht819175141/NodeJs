//�����첽+ͬ�������쳣�ļ����¼�:process.uncaughtException()
//1
/*console.log("before error");

function throwError(){//�׳�����ĺ���
    throw new Error("sync error");
}
/!*var asyncthrowError=function (){
//function asyncthrowError(){
    setTimeout(function(){
        throw new Error("async error");
    },0);
}*!///ֻ�����첽ͬ��˳��
var asyncthrowError= setTimeout(function(){
        throw new Error("async error");
    },0);//ֻ����ͬ���첽˳�򣿣�

try{
    throwError();//ͬ������
    asyncthrowError();//�첽����

}catch(err){//�������
    console.log("the error is: "+err);
};
/!*asyncthrowError();//�첽����*!/
process.on("uncaughtException",function(err){
    console.log("the error is: "+err);
})
//try catchֻ�ܲ���ͬ����������Ҫ�����첽Ҫ�õ�process.uncaughtException(),����ᱨ��
// ��Ҫд��try������ã�����Ҳ�ᱨ��
//setTimeout�����������ֻ�����첽ͬ��˳�򣻲���������ֻ����ͬ���첽˳�򣿣�
console.log("after error");*/


//2�ܽ᣺try catch����ͬ������process.uncaughtException(),�����첽����

var syncError=function(){
     throw new Error("sync error");
     };
var asyncError=setTimeout(function(){
    throw new Error("async error");
},0);
try{
    syncError();//ͬ������
    asyncError();//�첽����
}catch(err){//�������
    console.log("error all: "+err);
};
process.on("uncaughtException",function(err){
    console.log("the error is: "+err);
})

