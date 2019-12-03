//载入内置模块fs
var fs=require("fs");
//console.log(fs)
//异步读取文件内容
/*console.log("before");

fs.readFile("etc/readme.txt",function(err,data){
    //if(err) console.log(err)
    //return;
    if(err) return console.error(err);
    //console.log("succcess")
    console.log("success:"+data);
})
console.log("after");*/
//同步读取文件内容
/*var txt=fs.readFileSync("etc/readme.txt")
console.log(txt)

console.log(txt.toString())*/

//异步书写文件内容
//fs.writeFile("etc/readme_copy.txt","这是copy的",encoding="utf-8",function(err,data){
//    console.log("write done");
//})




//异步读写内容-封装
var sourcepath="etc/readme.txt";
var targetpath="etc/readme_copy.txt";
function read(filepath){
    fs.readFile(filepath,function(err,data){
        if(err) return console.error(err);
        console.log("success resd:"+data);
        var datas=data.toString();
        //write(targetpath)//书写新的文件
        write(targetpath,datas)//拷贝源文件
    })
}
/*function write(filepath){//书写新的文件
    fs.writeFile(filepath,"这是copy的",encoding="utf-8",function(err){
        console.log("write done");
    })
}*/
function write(filepath,data){//拷贝源文件
    fs.writeFile(filepath,data,encoding="utf-8",function(err){
        console.log("write done");
    })
}
read(sourcepath)
/*fs.readFileSync("etc/readme.txt",function(err){
    console.log(err)
})*/
