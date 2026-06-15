const express = require('express');
const upload = require('../comman/multerConfig');
const { createCategory, getCategory, deleteCategoryById, getCategoryById, updateCategoryById } = require('../Controller/CategoryController');
const { createProducts, getProduct, getProductById, updateProductById } = require('../Controller/ProductController');
const router = express.Router();

router.post('/category/create',upload.single('cimage'),(req,res)=>{
        createCategory(req,res,(data)=>{
                res.status(200).json({msg:"Category added",data:data})
        },(err)=>{
               res.status(500).json(err)
        })
})
router.get('/category',(req,res)=>{
        getCategory(req,res,(data)=>{
                res.status(200).json({catdata:data})
        },(err)=>{
               res.status(500).json(err)
        })
})
router.delete('/category/:id',(req,res)=>{
        deleteCategoryById(req,res,(data)=>{
                res.status(200).json({catdata:data})
        },(err)=>{
               res.status(500).json(err)
        })
})
router.get('/category/:id',(req,res)=>{
        getCategoryById(req,res,(data)=>{
                res.status(200).json({catdata:data})
        },(err)=>{
               res.status(500).json(err)
        })
})
router.patch('/category/update/:id',upload.single('cimage'),(req,res)=>{
        console.log("route body",req.body); // { cname: "New Name" }
    console.log(req.file.filename); // uploaded file
        updateCategoryById(req,res,(data)=>{
                res.status(200).json({catdata:data})
        },(err)=>{
               res.status(500).json(err)
        })
})
// ============================Product crud===================================
router.post('/product/create',upload.single('pimage'),(req,res)=>{
        createProducts(req,res,(data)=>{
                res.status(200).json({msg:"Product added",data:data})
        },(err)=>{
               res.status(500).json(err)
        })
})
router.get('/product',(req,res)=>{
        getProduct(req,res,(data)=>{
                res.status(200).json({data:data})
        },(err)=>{
               res.status(500).json(err)
        })
})
router.get('/product/:id',(req,res)=>{
        getProductById(req,res,(data)=>{
                res.status(200).json(data)
        },(err)=>{
               res.status(500).json(err)
        })
})
router.patch('/product/update/:id',upload.single('pimage'),(req,res)=>{
        updateProductById(req,res,(data)=>{
                res.status(200).json({msg:"Product updated",data:data})
        },(err)=>{
                console.log(err);
                
               res.status(500).json(err)
        })
})
module.exports = router