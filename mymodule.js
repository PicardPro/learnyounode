const fs = require('fs')
const path = require('path')
 
module.exports = function filteredLs(DirName, FileExt, callback) {
    let array = []
    fs.readdir(DirName, function(err, items)  {
        if (err) {
            console.error(err)
            return callback(err)
        }else {
            for (i=0; i<items.length; i++) {
                if(path.extname(items[i]).replace('.','') == FileExt){
                    array.push(items[i])
                }
            }
            return callback(null,array)
        }
        
    })
}

