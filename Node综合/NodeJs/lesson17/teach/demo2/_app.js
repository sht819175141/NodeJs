var fs = require('fs'),
    path = require('path'),
    http = require('http');
var MIME = {
    '.css': 'text/css',
    '.js': 'text/javascript'
};
function combineFiles(pathnames, callback) {
    var output = [];
    (function next(i, len) {
        if (i < len) {
            fs.readFile(pathnames[i], function (err, data) {
                if (err) {
                    callback(err);
                } else {
                    output.push(data);
                    next(i + 1, len);
                }
            });
        } else {
            //callback(null, Buffer.concat(output));
            callback(null, output+"");
        }
    }(0, pathnames.length));
}
function main(argv) {

    http.createServer(function (request, response) {
        var urlInfo = parseURL('./', request.url);
        combineFiles(urlInfo.pathnames, function (err, data) {
            if (err) {
                response.writeHead(404);
                response.end(err.message);
            } else {
                response.writeHead(200, {
                    'Content-Type': urlInfo.mime
                });
                response.end(data);
            }
        });
    }).listen(8080,function(){
        console.log('listen 8080');
    });
}
function parseURL(root, url) {

    var base, pathnames, parts;
    if (url.indexOf('??') === -1) {
        url = url.replace('/', '/??');
    }
    parts = url.split('??');
    base = parts[0];

    pathnames = parts[1].split(',').map(function (value) {
        return path.join(root, base, value);
    });
    console.log(pathnames);
    return {
        mime: MIME[path.extname(pathnames[0])] || 'text/plain',
        pathnames: pathnames
    };
}
main(process.argv.slice(2));