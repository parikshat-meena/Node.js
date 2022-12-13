// url module
const url = require('url')

const sampleURL =  "http://localhost:3000/home.html?id=101&name=Abhijit&salary=35000"

const data = url.parse(sampleURL,true)

console.log(data.host)
console.log(data.hostname)
console.log(data.path)
console.log(data.pathname)
console.log(data.protocol)
console.log(data.query)

const params = data.query

console.log(params.id)
console.log(params.name)
console.log(params.salary)