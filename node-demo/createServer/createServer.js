const http = require('http');
const url = require('url');
const util = require('util');

http.createServer(function (req, res) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    // res.end('Hello World');
    // res.end(util.inspect(url.parse(req.url, true)));

    // // 解析 url 参数
    var params = url.parse(req.url, true).query;
    // res.setEncoding('utf-8');
    res.write(util.inspect(url.parse(req.url, true)));
    res.write('\n');
    res.write('网站名:' + params.url);
    res.write('\n');
    res.write('网站名：' + params.name);
    res.write('\n');
    res.write('网站 URL：' + params.url);
    res.end();
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');
