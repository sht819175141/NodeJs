/**
 * Created by Nan on 2016/12/13.
 */
var login = require('./login');
var userlogin = require('./userlogin');

module.exports = function (app) {
    app.get('/', function (req, res) {
        var userInfomation = {
            name: "yingxiaona",
            age: "18",
            gender: "female",
            hobby: ['coding', 'eating', 'dace', 'sleep'],
            job: '20K'
        };
        res.render('index', {title: 'index page', flag: true, userInfo: userInfomation});
    });
    app.get('/login', login);
    app.post('/userlogin', userlogin);
};