const fs = require('fs');
fs.readFile('reverse&template&validation UI.xlsx', function (error, data) {
    if (error) {
        return console.error(error);
    }
    console.log('异步读取: ' + data.toString());
    console.log(data)
})
