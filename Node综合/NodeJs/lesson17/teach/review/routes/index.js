/**
 * Created by Nan on 2016/12/15.
 */
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/index');
    });
    app.get('/index', function (req, res) {
        res.render('index', {title: 'submit type: JSON'});
    });
    app.post('/index', function (req, res) {
        res.json({
            code:0,
            data:'success'
        });
    });

    app.get('/login', function (req, res) {
        res.render('login', {title: 'submit type: JSONP'});
    });
    app.post('/_login', function (req, res) {
        var data = {
            name: 'congyisu',
            age: '35',
            gender: 'man'
        };
        res.json(JSON.stringify(data));
    });

    app.get('/getJson', function (req, res) {
        var data = {
            name: 'congyisu',
            age: '35',
            gender: 'man'
        };
        res.json(JSON.stringify(data));
    });
};