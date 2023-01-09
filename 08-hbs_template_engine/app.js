require('dotenv').config()
const express = require('express')
const app  =  express()
const path =  require('path')
const hbs  =  require('hbs')

const port = process.env.port
const host = process.env.host


//setup the express static middleware
app.use(express.static(__dirname + "/public"))


// configure the hbs template
const viewPath = path.join(__dirname,'templates/views')
app.set('view engine','hbs')  //tells express who is our view engine
app.set('views',viewPath) // specify the path of our files. views are nothing but only our .hbs files


// configure the partials
const partialPath = path.join(__dirname + 'templates/partials')
hbs.registerPartials(partialPath)


app.get("/",(req,res)=>{
    // res.send('Welcome to the home page')
    res.render('index',{
        title:'Home',
        author:'Amit'
    })
})

app.get("/about",(req,res)=>{
    // res.send('welcome to the about page')
    res.render('about')
})

app.get("/services",(req,res)=>{
    // res.send('welcome to the services page')
    res.render('services')
})

app.get("/help",(req,res)=>{
    // res.send('welcome to the help page')
    res.render('help')
})

app.get("*",(req,res)=>{
    // res.send('404-The resource you are looking for are not available')
    res.render('404')
})

app.listen(port,()=>{
    console.log(`Server started at http://${host}:${port}`)
})