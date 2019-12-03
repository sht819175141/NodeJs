/**
 * Created by Administrator on 2016/12/22.
 */
const home=require('./home');
const page=require('./page');

module.exports=function(app){
    app.get('/home',home);
    app.get('/page',page);
}