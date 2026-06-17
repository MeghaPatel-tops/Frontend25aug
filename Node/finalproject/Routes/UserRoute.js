const express = require('express');
const { userRegistration, userLogin } = require('../Controller/UserController.js');
const router = express.Router();


router.post('/registration',(req,res)=>{
     userRegistration(req,res,(data)=>{
        res.status(200).json({msg:"User created successfully",data:data})
     },(err)=>{
           res.json(err)
     })
      
})
router.post('/login',(req,res)=>{
     userLogin(req,res)
      
})

module.exports= router