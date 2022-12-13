require('dotenv').config()// dotenv module

const url = require('url') // url module

const host = process.env.host // Using .env file 
const port = process.env.port 

const http = require('http') // Importing http module


let serverURL = ""

const myserver = http.createServer((req,res)=>{
    res.write("Assignment Server Running")
    
    serverURL =   req.url

    const data = url.parse(serverURL,true)

    console.log(data.query)

    const params = data.query
    console.log(params.id)
    console.log(params.name)
    res.write(`\n${data.pathname}`)
    res.write(`\n${params.id}`)
    res.write(`\n${params.name}`)
    res.end()

})

myserver.listen(port,()=>{
    console.log(`This server is started on ${host}:${port}`)
})