const mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], (err, data) => {
    if (err) {
        return callback(err)
    }else {
        data.forEach(element => {
            console.log(element)
        });
    }
})