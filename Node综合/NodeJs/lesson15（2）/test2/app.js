/**
 * Created by Nan on 2016/11/14.
 */
var express = require('express');
var path = require('path');
var ejs = require('ejs');

var studentInfo = require('./utils/getStudentInfo');


var app = express();

//THIS IS CONFIGERS
app.set('html', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);
app.set('env', 'development');

//THIS IS ROUTERS
app.get('/', function (req, res) {
    //res.render('index', {title: 'ejs demo index', name: '高文雅'});
    //var temp = JSON.parse(studentInfo.getStudentInformation);
    var temp = studentInfo.getStudentInformation;
    console.log(temp);
    res.render('index', {title: 'ejs demo index', name: '高文雅', names: temp});
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

//LISTEN PROT
app.listen(app.get('port'), function () {
    console.log('listen port at 8080');
});