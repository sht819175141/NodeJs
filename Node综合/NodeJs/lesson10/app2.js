//二、异步+同步捕获异常的监听事件:process.uncaughtException()
//1
/*console.log("before error");

function throwError(){//抛出错误的函数
    throw new Error("sync error");
}
/!*var asyncthrowError=function (){
//function asyncthrowError(){
    setTimeout(function(){
        throw new Error("async error");
    },0);
}*!///只能是异步同步顺序
var asyncthrowError= setTimeout(function(){
        throw new Error("async error");
    },0);//只能是同步异步顺序？？

try{
    throwError();//同步捕获
    asyncthrowError();//异步捕获

}catch(err){//捕获错误
    console.log("the error is: "+err);
};
/!*asyncthrowError();//异步捕获*!/
process.on("uncaughtException",function(err){
    console.log("the error is: "+err);
})
//try catch只能捕获同步错误，所以要捕获异步要用到process.uncaughtException(),否则会报错；
// 且要写在try里面调用，否则也会报错
//setTimeout外面包函数：只能是异步同步顺序；不包函数：只能是同步异步顺序？？
console.log("after error");*/


//2总结：try catch捕获同步错误，process.uncaughtException(),捕获异步错误

var syncError=function(){
     throw new Error("sync error");
     };
var asyncError=setTimeout(function(){
    throw new Error("async error");
},0);
try{
    syncError();//同步捕获
    asyncError();//异步捕获
}catch(err){//捕获错误
    console.log("error all: "+err);
};
process.on("uncaughtException",function(err){
    console.log("the error is: "+err);
})

