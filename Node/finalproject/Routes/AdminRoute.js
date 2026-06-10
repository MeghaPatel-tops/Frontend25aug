const express = require('express');
const upload = require('../comman/multerConfig');
const { createCategory, getCategory, deleteCategoryById } = require('../Controller/CategoryController');
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

module.exports = router