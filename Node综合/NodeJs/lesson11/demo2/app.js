/**
 * Created by yunhuan on 2016/12/8.
 */
//捕获异常：
//1、浅、
//!同步异常：会阻挡下面代码的运行；但是异步不会
//∨
//trycatch用于捕获同步，uncaughtException用于捕获异步
//∨
//！捕获异常的实质：捕获到就不会阻止下面代码的运行，但是console.log("the err is "+err)相当于是
//手动输出告诉你错误；与页面报错不同，页面报错是没有捕捉到错误

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

/*//2深：
setTimeout(function(){
    throw new Error("async error");
});


process.on("uncaughtException",function(err){
    console.log("the yerr is "+err)//在没有trycatch的情况下也可以捕获同步，但是还是会阻挡下面的运行
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
//uncaughtException虽然也能捕获到同步异常，但是还是会阻止下面的代码的运行，且uncaughtException必须写在
//同步抛错的上面，才能捕获到同步异常
//而trycatch捕获到的同步异常就不会阻止下面的代码的运行，且同一个trycatch捕获两个同步只会输出第一次的错误提醒；
//可以用两个trycatch分别捕获

