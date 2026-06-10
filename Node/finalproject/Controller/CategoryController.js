const Category = require("../Model/Category")

const createCategory = async(req,res,data,err)=>{
    try {
        const res = await Category.insertOne({
            cname:req.body.cname,
            cimage:"uploads/"+req.file.filename,
        })
        if(res){
            console.log(data);
            
            data(res);
        }
        
    } catch (error) {
        err(error)
    }
}

const getCategory = async(req,res,data,err)=>{
     try {
        const res = await Category.find();
        data(res)
     } catch (error) {
        err(error)
     }
}
const deleteCategoryById= async(req,res,data,err)=>{
    try {
        const result = await Category.findByIdAndDelete(req.params.id);
        data(result)
    } catch (error) {
        err(error)
    }
}

module.exports = {createCategory,getCategory,deleteCategoryById}