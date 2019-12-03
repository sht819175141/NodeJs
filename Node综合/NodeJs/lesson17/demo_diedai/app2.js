/**
 * Created by yunhuan on 2016/12/15.
 */
//���ε�����

var fs=require("fs");
var http=require("http");
var path=require("path");
//�ļ����ͣ�css��js
var MIME={
    ".css":"text/css",
    ".js":"text/javascript"
}
//�ж��Ƿ����ļ��ĵĺ���(fs.stat�õ��ļ�����Ϣ)
function validateFile(pathname,callback){
    (function next(i, len) {
        if (i < len) {//δ��ȡ��
            fs.stat(pathname[i], function (err, stats) {
                //����err�����жϳ��������ļ���ʱ��
                if (err) {
                    callback(err);
                }else if(!stats.isFile()){
                    callback(new Error("is not a file!"));
                //������Ŷ�ȡ��һ��
                }else{
                    next(i + 1, len);
                }
            });
        } else {//��ȡ���
            callback(null,pathname);
        }
    }(0, pathname.length));

}
//���庯��
function main(){
    //����������
    http.createServer(function(request,response){
        //���ո�ʽ��url���� �õ�return���Ķ���
        var urlobj=parseUrl("./",request.url);
        //�����Ƿ����ļ��ĵĺ������ص�callback������response����outputFile
        validateFile(urlobj.pathnames,function(err,data){
            if(err){
                response.writeHead(404,{
                    "content-type":'text/html'
                });
                response.end(err);
            }else{
                response.writeHead(200,{
                    "content-type":urlobj.mime
                });
                //response.end(data);
                //����ֱ��������Ӧ��һ�߶�ȡ��һ�߸�����Ӧ
                outputFiles(pathnames, response);
            }
        });
    }).listen(8000,function(){
        console.log("listen at 8000");
    });
}
main();
//��ʽ��url��
function parseUrl(root,url){
    if(url.indexOf("??")===-1){
        url=url.replace("/","/??");
    }
    //��??�ָ�url
    var arr=url.split("??");
    //console.log(arr);//[ '/', 'one.js,two.js' ]
    var baseroot=arr[0];//·���ĸ�Ŀ¼
    var pathnames = arr[1].split(',').map(function (value) {
        return path.join(root, baseroot, value);//??
    });
    //console.log(pathnames);//[ 'one.js', 'two.js' ]
    return {
        mime: MIME[path.extname(pathnames[0])] || 'text/plain',
        pathnames: pathnames
    };
}
//��ȡ��������Ӧ�ĺ���
function outputFiles(pathnames, response){
    (function next(i, len) {
        if (i < len) {//δ��ȡ��
            var readstream=fs.sreateReadStream(pathnames);
            readstream.pipe(response,{end:false});//end�ж϶�ȡ״̬��falseΪδ�꣬���������ִ��
            readstream.on('end', function() {//���������¼�
                next(i + 1, len);
            });
        } else {//��д���
            response.end();
        }
    }(0, pathname.length));
}


//���ε�����
//�������������ļ��ϲ��������
//�����{
    //��ַ����http://localhost:8000/??one.js,two.js
    //���̨network��??one.js,two.js
//}
