//2、for循环嵌套异步方法
var fs=require("fs");

var readarr=["./file/read.txt","./file/read2.txt"];
for(var i=0;i<readarr.length; i++){
    (function(i){
        setTimeout(function(){
            fs.readFile(readarr[i],function(err,data){
                if(err) return console.error(err);
                console.log(data.toString());
            })
        },0)
    })(i)
};
//关键：闭包(function(i){ })(i)
//for循环嵌套异步方法报错： binding.open(pathModule._makeLong(path)



