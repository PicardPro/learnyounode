const fs = require('fs')
fileRead = fs.readFileSync(process.argv[2],"utf-8")
const regex = /[\n]/g
const found = fileRead.match(regex)
const total = found.length
console.log(total)