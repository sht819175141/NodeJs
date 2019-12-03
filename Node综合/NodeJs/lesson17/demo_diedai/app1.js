/**
 * Created by yunhuan on 2016/12/15.
 */
//�����£�һ�ε�������̬�ļ�����ϲ�
/*
var arr=["one.js","two.js"]
var a=arr+"";
console.log(typeof a);*/
//����һ�Σ�

var fs=require("fs");
var http=require("http");
var path=require("path");
//�ļ����ͣ�css��js
var MIME={
    ".css":"text/css",
    ".js":"text/javascript"
}
//�ϲ��ļ��ĺ���
function combineFile(pathname,callback){
    //forѭ���������հ��첽��
    var output = [];
    (function next(i, len) {
        if (i < len) {//δ��ȡ��
            fs.readFile(pathname[i], function (err, data) {
                if (err) {
                    callback(err);
                } else {
                    //�Ѷ�������push��һ������������Ŷ�ȡ��һ��
                    output.push(data);
                    next(i + 1, len);
                }
            });
        } else {//��ȡ���
            //callback(null, Buffer.concat(output));//ת��Ϊbuffer
            callback(null, output+"");//ת��Ϊ�ַ�����end�������
        }
    }(0, pathname.length));

}
//���庯��
function main(){
    //console.log(argv)
    //����������
    http.createServer(function(request,response){
        //���ø�ʽ��url
        var root="./";//·����Ŀ¼
        var url=request.url;
        //console.log(url);//   :/??one.js,two.js
        var urlobj=parseUrl(root,url);//�õ�parseUrl return���Ķ���
        //���úϲ��ļ��ĺ�����callback
        combineFile(urlobj.pathnames,function(err,data){
            if(err){
                response.writeHead(404,{
                    "content-type":'text/html'
                });
                response.end(err);
            }else{
                response.writeHead(200,{
                    "content-type":urlobj.mime
                });
                //console.log(response);
                response.end(data);
            }
        });
    }).listen(8000,function(){
        console.log("listen port at 8000");
    });
}
//��ʽ��url��
function parseUrl(root,url){
    //�ж������ַ��urlû��??,�����??
    if(url.indexOf("??")===-1){
        url=url.replace("/","/??");
    }
    //��??�ָ�url
    var arr=url.split("??");
    //console.log(arr);//[ '/', 'one.js,two.js' ]
    var baseroot=arr[0];//·���ĸ�Ŀ¼
    //��,�ָ��ļ�����map��ӳ�䣬���Բ������еģ�
    var pathnames = arr[1].split(',').map(function (value) {
        return path.join(root, baseroot, value);//??
    });
    //console.log(pathnames);//[ 'one.js', 'two.js' ]
    return {
        mime: MIME[path.extname(pathnames[0])] || 'text/plain',
        pathnames: pathnames
    };
}
main();


//һ�ε�����
//�������������ļ��ϲ��������
//�����{
    //��ַ����http://localhost:8000/??one.js,two.js
    //���̨network��??one.js,two.js
//}