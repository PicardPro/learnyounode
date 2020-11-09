const fs = require('fs')
const path = require('path')
 
fs.readdir(process.argv[2], function(err, items)  {
    if (err) return console.error(err);
    for (i=0; i<items.length; i++) {
        if(path.extname(items[i]).replace('.','') == process.argv[3]){
            console.log(items[i]);
        }
    }
})
