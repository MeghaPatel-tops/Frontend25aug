const Cart = require("../Model/Cart");
const Users = require("../Model/Users")
const jwt = require("jsonwebtoken");

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
        let result = await Cart.insertOne(req.body);
        if(result){
            res.status(200).json({msg:"Product added in cart",flag:1})
        }
    } catch (error) {
        console.log(error);
        
        res.json(error)
    }
}
module.exports = {userRegistration,userLogin,addToCart}