/**
 * Created by Nan on 2016/11/16.
 */
var user = {
    queryById: 'select * from login where id=?',
    queryByUser: 'select * from login where userName=?',
    queryAll: 'select * from login'
};

module.exports = user;