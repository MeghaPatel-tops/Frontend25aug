const Product = require('../Model/Products')

const createProducts = async(req,res,data,err)=>{
    try {
        const res = await Product.insertOne({
            pname:req.body.pname,
            price:req.body.price,
            description:req.body.description,
            pimage:"uploads/"+req.file.filename,
            cname:req.body.cname
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
const getCategoryById = async(req,res,data,err)=>{
     try {
        const res = await Category.findById(req.params.id);
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
const updateCategoryById = async (req, res, data, err) => {
  try {
    const result = await Category.updateOne(
        {_id:Object(req.params.id)},{
            cname:req.body.cname,
            cimage:"uploads/"+req.file.filename,
        }
    )

    data(result);
  } catch (error) {
    err(error);
  }
};

module.exports = {createProducts,getCategory,deleteCategoryById,getCategoryById,updateCategoryById}