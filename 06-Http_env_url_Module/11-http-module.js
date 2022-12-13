// http module

require ('dotenv').config()
// console.log(process.env)

const port = process.env.port
const host = process.env.host
// Import http module 
var http = require('http')

// create HTTP server
const myserver = http.createServer((req,res)=>{
    
    // res.write(req.url)

    if(req.url=="/" || req.url == "/home"){
        res.write('<html><body> <h2>Welcome to your own HTTP Web Server</h2></body></html>')
    }else if( req.url == "/about"){
        res.write('<html><body> <h2>Welcome to the About page </h2></body></html>')
    }else if( req.url == "/services"){
        res.write('<html><body> <h2>Welcome to the Services page </h2></body></html>')
    }else if( req.url == "/contacts"){
        res.write('<html><body> <h2>Welcome to the Contacts page </h2></body></html>')
    }else
        res.write('<html><body> <h2> 404 - Page Not Found </h2></body></html>')

    res.end()
})

// listen on a paritcular port
myserver.listen(port,()=>{
    console.log(`The server is started on http://${host}:${port}`)
})