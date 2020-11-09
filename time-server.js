const net = require('net')
function zeroFind(date) {
    return (date < 10 ? '0' : '') + date
}
const server = net.createServer( (socket) =>{
    const date = new Date()
    const dateOfDay  = date.getFullYear()+'-'+zeroFind(date.getMonth()+1)+'-'+zeroFind(date.getDate())+' '+zeroFind(date.getHours())+':'+zeroFind(date.getMinutes()+'\n')
    socket.end(dateOfDay)
})
server.listen(parseInt(process.argv[2]))