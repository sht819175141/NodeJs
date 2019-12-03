/**
 * Created by Nan on 2016/11/12.
 */
var express = require('express');


var path = require('path');
var ejs = require('ejs');

var app = express();
var routes = require('./routes')(app);

//������Ⱦ��ͼ���ļ�·��
app.set('html', path.join(__dirname, 'html'));
//������ͼ�����ʽ��Ĭ����.ejs,�����޸ĳ�.html
app.set('view engine', 'html');
//Express����Ⱦ�����Ϊhtml
app.engine('html', ejs.__express);

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));


//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});
//
//app.use(function (err, req, res, next) {
//    // set locals, only providing error in development
//    res.locals.message = err.message;
//    res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//    // render the error page
//    res.status(err.status || 500);
//    res.render('error');
//});
app.listen(8080, function () {
    console.log('Express server listening on port 8080 ');
});
