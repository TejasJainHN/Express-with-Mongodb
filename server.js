const express = require('express');
const app = express();
const first=require('./controllers/userController');
const second=require('./controllers/userController')
const Router = require ('./middleware/mid')
const mongoose=require('mongoose');
require('dotenv').config() ;
const { body,validationResult,query } = require('express-validator');
app.use(express.json());
app.use(Router);


app.use((req,res,next)=>{
  console.log("Working on error");
  next();
})

const data=mongoose.connect('mongodb+srv://TejasJain:TejasJainHN@cluster0.r8v55.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

data.then((d)=>{
console.log('connected to db')
}).catch((err)=>{
  console.log('not connected to db') 
  }).finally()


app.get("/",(req,res,next)=>{
  
  const method=req.method
  if(method==='GET'){
   console.log('Hello from home page')
  }
  else{
    res.status(400).send('bad Request')
  }
  next();
},function(req,res){
  res.status(200).json({ 
    msg:"hello world hi"
  })
});

const Schema=mongoose.Schema({
  email:String
})

const FirstData = mongoose.model("FirstData",Schema)
const dataone=new FirstData({
  email:"tejas@gmail.com"
});
dataone.save().then((d)=>{console.log("data is saved")}).catch((err)=>{console.log(err)})

app.post("/tej",first);

app.get("/login",query('email').notEmpty(),second);

let port=process.env.PORT || 4000;


app.listen(port,()=>{
  console.log(`server is running at localhost:${port} `)
})





