const fs = require('fs')
fs.readFile(process.argv[2],"utf-8", (err, data) => {
    if (err) return console.error(err)
    const regex = /[\n]/g
    const found = data.match(regex)
    const total = found.length
    console.log(total)
 });