const { Schema, default: mongoose } = require("mongoose");

const CategorySchema = new Schema({
    cname:{
        type:String,
        required:true,
    },
    cimage:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('Category',CategorySchema)