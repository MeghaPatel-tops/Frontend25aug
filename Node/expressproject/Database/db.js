const { default: mongoose } = require("mongoose");

const connectDb = async()=>{
    try {
        await mongoose.connect('mongodb+srv://meghapatel1tops:Megha123@cluster0.wfiv5.mongodb.net/studentdb')
        console.log("db connected")
    } catch (error) {
          console.log(error);
         process.exit(1);
    }
}
module.exports= connectDb