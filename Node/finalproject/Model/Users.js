const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
    username:{
        type:String,
        required:[true,"Username is Required"]
    },
    email:{
        type:String,
       required:[true,"Email is Required"]
    },
    pwd:{
        type:String,
        required:[true,"Password is Required"]
    },
    contact:{
        type:String,
        required:[true,"Contact is Required"]
    }
})

module.exports= mongoose.model('Users',UserSchema)