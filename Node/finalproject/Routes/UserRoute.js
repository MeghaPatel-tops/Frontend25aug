const express = require('express');
const { userRegistration, userLogin, addToCart, ViewCart, UpdateCart, DeleteCart, createOrder, createPayment } = require('../Controller/UserController.js');
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

router.get('/cart/:id',authMiddleware,(req,res)=>{
     ViewCart(req,res)
})

router.post('/updatecart/',authMiddleware,(req,res)=>{
     UpdateCart(req,res)
})

router.post('/deletecart/',authMiddleware,(req,res)=>{
    DeleteCart(req,res)
})

router.post('/create-order/',authMiddleware,(req,res)=>{
    createOrder(req,res);
})

router.post('/payments/',authMiddleware,(req,res)=>{
    createPayment(req,res);
})


module.exports= router