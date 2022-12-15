//import express
const express = require('express')

const app = express()//create object of express

// get function of express
app.get("/",(req,res)=>{
    res.send("Home page")
})

// Assignment routes of "/about","/services" and "/help"
app.get("/about",(req,res)=>{
    res.send("About page")
})

app.get("/services",(req,res)=>{
    res.send("Services page")
})

app.get("/help",(req,res)=>{
    res.send("Help page")
})

// routing for invalid inputs
app.get("**",(req,res)=>{
    res.send("Error 404 - Page Not Found")
})

//server listening at port 5000
app.listen(5000,()=>{
    console.log("Server is started at port: 5000")
})