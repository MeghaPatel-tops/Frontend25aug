const express = require('express');
const router = express.Router();

router.get('/product',(req,res)=>{
     res.send('admin product route')
})

router.get('/whether',(req,res)=>{
    console.log(req.query.long);
    console.log(req.query.lat);
    
    
})
router.get('/category/:id',(req,res)=>{
     res.send(req.params.id)
})

module.exports= router