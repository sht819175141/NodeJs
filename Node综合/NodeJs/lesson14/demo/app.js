/**
 * Created by Nan on 2016/12/12.
 */
//var app = require('express')();
var express = require('express');
var path = require('path');
var ejs = require('ejs');
var app = express();

// view engine setup
app.set('html', path.join(__dirname, 'html'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', ejs.__express);

var routes = require('./routes')(app);

app.listen(8080, function () {
    console.log('8080');
});