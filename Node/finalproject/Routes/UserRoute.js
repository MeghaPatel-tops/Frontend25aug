const express = require('express');
const { userRegistration, userLogin, addToCart } = require('../Controller/UserController.js');
const authMiddleware = require('../Middleware/authMiddleware.js');
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


router.get('/profile',authMiddleware,(req,res)=>{
       res.json({
        message: "Protected Route",
        user: req.user
    });
      
})

router.post('/addtocart',authMiddleware,(req,res)=>{
     console.log(req.body);
     
      addToCart(req,res)
      
})
module.exports= router