const { Schema, default: mongoose } = require("mongoose");

const OrderSchema = new Schema({
  
    uid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    pid:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Products"
    }]
    ,
    total:{
        type:Number,
        default:0,
    },
    rzp_orderId:{
         type:String
    },
    status:{
        type:String
    },
    rzp_payment_id:{
        type:String
    }
})

module.exports= mongoose.model('order',OrderSchema)