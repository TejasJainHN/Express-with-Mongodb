const express = require('express')
const Router = express.Router()
Router.use((req,res,next)=>{
  console.log("Middleware from Router");
  next()
})

Router.get('/route',(req,res)=>{
  res.status(200).send("Hello from Router")
})

module.exports=Router