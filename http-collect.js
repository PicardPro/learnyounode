const http = require('http')
const bl = require('bl')
//let result = ""
//http.get(process.argv[2],(response) =>{
//   response.on('data', (data)=> {
//       result += data.toString()
//   })
//   response.on('end', () =>{
//     console.log(result.length + '\n' + result)
//  })
//}) 

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
           console.error(err) 
        }
        console.log(data.toString().length+'\n'+data.toString())

    }))
})
