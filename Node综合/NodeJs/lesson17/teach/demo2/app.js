var fs = require('fs'),
    path = require('path'),
    http = require('http');
var MIME = {
    '.css': 'text/css',
    '.js': 'text/javascript'
};

function combineFile(pathname, callback) {
    var arr = [];
    (function readFile(i, length) {
        if (i < length) {
            fs.readFile(pathname[i], function (err, data) {
                if (err)  callback(err);
                arr.push(data);
                readFile(++i, length);
            });
        } else {
            callback(null, arr + "");
        }
    })(0, pathname.length);
}
function main(argv) {

    http.createServer(function (req, res) {

        var root = './';
        var url = req.url;
        var urlInfo = parseUrl(root, url);

        combineFile(urlInfo.pathname, function (err, data) {
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                res.end(err);
            } else {
                res.writeHead(200, {
                    'Content-Type': urlInfo.mime
                });
                res.end(data);
            }
        });
    }).listen(8080, function () {
        console.log('listen 8080');
    });
}
function parseUrl(root, url) {
    if (url.indexOf('??') === -1) {
        url=url.replace('/', '/??');
    }
    var parts = url.split('??');
    var baseRoot = parts[0];

    pathnames = parts[1].split(',').map(function (value) {
        return path.join(root, baseRoot, value);
    });
    return {
        mime: MIME[path.extname(pathnames[0])] || "text/plain",
        pathname: pathnames
    }
}
main(process.argv.slice(2));