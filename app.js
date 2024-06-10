const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const employee = require("./models/employee")

const app = express()
app.use(cors())


app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/search",(req,res)=>{
    res.send("welcome")
})

app.get("/delete",(req,res)=>{
res.send("welcome back")
})

app.get("/view",(req,res)=>{
    res.send("welcome to the page")
})

app.listen(8080,()=>{
    console.log("server started")
})

