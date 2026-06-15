const Products = require('../Model/Products');
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

const getProduct = async(req,res,data,err)=>{
     try {
        const res = await Product.find();
        data(res)
     } catch (error) {
        err(error)
     }
}
const getProductById = async(req,res,data,err)=>{
     try {
        const res = await Product.findById(req.params.id);
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
const updateProductById = async (req, res, data, err) => {
  try {
    const result = await Product.updateOne(
        {_id:Object(req.params.id)},{
            pname:req.body.pname,
            price:req.body.price,
            description:req.body.description,
            pimage:"uploads/"+req.file.filename,
            cname:req.body.cname
        }
    )

    data(result);
  } catch (error) {
    err(error);
  }
};

module.exports = {createProducts,getProduct,deleteCategoryById,getProductById,updateProductById}