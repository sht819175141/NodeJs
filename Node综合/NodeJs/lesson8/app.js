//-------zlib(数据压缩和解压缩）
var fs=require("fs");
var zlib=require("zlib");
//console.log(zlib)
//1）创建一个新的Gzip对象
var gzip=zlib.createGzip();

//创建一个读取流
//var readStream=fs.createReadStream("one.txt");
////创建一个写入流
//var writeStream=fs.createWriteStream("one_copy.txt.gz");
////通过pipe(gzip)将数据压缩并导入到要写的流中
//readStream.pipe(gzip).pipe(writeStream);
////读取压缩文件
fs.readFile("one_copy.txt.gz",function(err,data){
    if(err) return console.error(err);
    console.log(data)
    //用zlib的unzip(),解压读取出的buffer
    zlib.gunzip(data,function(err,data){
        if(err) return console.error(err);
        console.log(data.toString().trim());
    })
})
//2）deliate、inflate：只能用于字符串
var str="huanhuanzhzha52200";
//通过zlib.deflate()将数据压缩
zlib.deflate(str,function(err,data){
    if(!err){
        console.log(data.toString("base64"));
        //用zlib的inflate(),解压读取出的buffer
        zlib.inflate(data,function(err,buf){
            console.log(buf.toString())
        })
    }
})
