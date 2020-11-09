const http = require('http')
const bl = require('bl')
for(i=2; process.argv[i] != undefined; i++) {
    http.get(process.argv[i],  (response) =>{
    
        response.pipe(bl( (err, data) =>{
            if (err) {
                console.error(err) 
            }
            console.log(data.toString())

        }))
    })
}
