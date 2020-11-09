const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (req, res) {

    req.pipe(map(function (data) {return data.toString().toUpperCase()})).pipe(res)
})

server.listen(Number(process.argv[2]))