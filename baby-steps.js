var total = 0
var i = 2
while(process.argv[i] != undefined) {
    total += parseInt(process.argv[i])
    i++
}
console.log(total)