//2��forѭ��Ƕ���첽����
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
//�ؼ����հ�(function(i){ })(i)
//forѭ��Ƕ���첽�������� binding.open(pathModule._makeLong(path)



