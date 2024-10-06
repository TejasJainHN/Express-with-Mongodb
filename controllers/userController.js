const express = require('express');
const { body,validationResult } = require('express-validator');


const first=function(req,res){
  res.status(500).json({email:req.body.email}
   
  )
}

const second=function(req,res){
  const err= validationResult(req)
  if(err.isEmpty()){
    res.status(200).send(req.query)
  }else{
    res.status(400).json({error:err.array()})
  }
 
}



module.exports=first
module.exports=second
