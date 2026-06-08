const mongoose = require('mongoose')
const url = "mongodb+srv://meghapatel1tops:Megha123@cluster0.wfiv5.mongodb.net/finalecomndb"



const connection = async()=>{
    try {
        await mongoose.connect(url);
        console.log("db connected");
        
    } catch (error) {
        console.log("error",error);
         process.exit(1);
    }
}

module.exports= connection;