/**
 * Created by Nan on 2016/11/12.
 */
var _home = require('./home');
var _register = require('./register');
var _registerSubmit = require('./registerSubmit');


module.exports = function (app) {
    app.get('/', _home.home);
    app.get('/register', _register.register);
    app.post('/register', _registerSubmit.submit);
};