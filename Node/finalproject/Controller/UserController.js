const Cart = require("../Model/Cart");
const Orders = require("../Model/Orders");
const Users = require("../Model/Users")
const jwt = require("jsonwebtoken");
const razorpay = require('./razorpay')

const userRegistration = async(req,res,data,err)=>{
    try {
        const response = await Users.insertOne(req.body);
        
            data(response)
        
        
    } catch (error) {
        err(error)
        
   
    
    }
}

const userLogin = async(req,res)=>{
    try {
        const user = await Users.findOne({
            email:req.body.email,
          
        });
        console.log(user);
        
       if(!user){
           return  res.json({
               error:"Login Failed",
                msg: "Invalid Email or Password"
           })
       }
          const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        "secret123",
        {
            expiresIn: "1h"
        }
    );

    res.status(200).json({
        msg: "Login Success",
        token,
        "userId":  user._id,
    });
        
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json(error)
   
    }
}

const addToCart = async(req,res)=>{
    try {

        let preCartData = await Cart.findOne({uid:req.body.uid,pid:req.body.pid});
        console.log(preCartData);
        
        if(preCartData){
           let result=  await Cart.updateOne({_id:Object(preCartData._id)},{qty:preCartData.qty + 1})
           if(result){
            res.status(200).json({msg:"Qty Updated in cart",flag:1})
        }
        }
        else{
             let result = await Cart.insertOne(req.body);
        if(result){
            res.status(200).json({msg:"Product added in cart",flag:1})
        }
        }
       
    } catch (error) {
        console.log(error);
        
        res.json(error)
    }
}


const ViewCart = async(req,res)=>{
    try {
        let uid = req.params.id;
       
        let data = await Cart.find({uid:uid}).populate('pid');
        if(data){
             res.status(200).json(data)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const UpdateCart = async(req,res)=>{
    try {
        let cartid = req.body.cartid;
        let qty = req.body.qty
       
        let result=  await Cart.updateOne({_id:Object(cartid)},{qty:qty })
           if(result){
            res.status(200).json({msg:"Cart Updated ",flag:1})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}


const DeleteCart = async(req,res)=>{
    try {
        let cartid = req.body.cartid;
     
        let result=  await Cart.findByIdAndDelete(cartid)
           if(result){
            res.status(200).json({msg:"Cart Item Removed ",flag:1})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const createOrder= async (req, res) => {
    try {
        const { total } = req.body;

        const options = {
            amount: total * 100, // Convert ₹ to paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                purpose: "Travel Booking"
            }
        };

        const order = await razorpay.orders.create(options);
        const dbOrder = await Orders.insertOne({...options,uid:req.body.uid,pid:req.body.pid,rzp_orderId:order.id,status:"pending"})

        res.status(200).json({
            success: true,
            order
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            message: "Unable to create order"
        });
    }
}

const createPayment = async(req,res)=>{
    try {
        console.log(req);
        
        let result1 = await Orders.updateOne({rzp_orderId:req.body.orderid},{status:"Done",rzp_payment_id:req.body.rzp_pay_id})

        console.log(result1);
        
       await Cart.deleteMany({uid:req.body.uid});
        res.json("Done")
    } catch (error) {
        console.log(error);
        
        res.status(500).json(error)
    }
}
module.exports = {userRegistration,userLogin,addToCart,ViewCart,UpdateCart,DeleteCart,createOrder,createPayment}