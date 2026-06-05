const { default: mongoose } = require("mongoose");

const StudentSchema = new mongoose.Schema({
    studentname:{
        type:String,
        required:true
    },
    email:{
    type:String,
    required:true
    },
    contact:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})
module.exports= mongoose.model('Student',StudentSchema)