/**
 * Created by yunhuan on 2016/12/8.
 */
//�����쳣��
//1��ǳ��
//!ͬ���쳣�����赲�����������У������첽����
//��
//trycatch���ڲ���ͬ����uncaughtException���ڲ����첽
//��
//�������쳣��ʵ�ʣ����񵽾Ͳ�����ֹ�����������У�����console.log("the err is "+err)�൱����
//�ֶ���������������ҳ�汨��ͬ��ҳ�汨����û�в�׽������

setTimeout(function(){
    throw new Error("async error");
});
function sync(){
    throw new Error("sync error");
};
try{
     sync();
}catch(err){
     console.log("the err is "+err);
};
process.on("uncaughtException",function(err){
    console.log("the err is "+err)
})

/*//2�
setTimeout(function(){
    throw new Error("async error");
});


process.on("uncaughtException",function(err){
    console.log("the yerr is "+err)//��û��trycatch�������Ҳ���Բ���ͬ�������ǻ��ǻ��赲���������
})
function sync2(){
    throw new Error("sync2 error");
};
try{
     sync2();
        sync()
     }catch(err){
     console.log("the terr is "+err);
};
console.log("before");
function sync(){
    throw new Error("sync error");
};

console.log("after");*/
//uncaughtException��ȻҲ�ܲ���ͬ���쳣�����ǻ��ǻ���ֹ����Ĵ�������У���uncaughtException����д��
//ͬ���״�����棬���ܲ���ͬ���쳣
//��trycatch���񵽵�ͬ���쳣�Ͳ�����ֹ����Ĵ�������У���ͬһ��trycatch��������ͬ��ֻ�������һ�εĴ������ѣ�
//����������trycatch�ֱ𲶻�

