const express = require('express');
const getLongLat = require('./comman');

const router = express.Router();

router.get('/product',(req,res)=>{
     res.send('admin product route')
})

router.get('/whether',(req,res)=>{
    console.log(req.query.city);
    getLongLat(req,(data)=>{
          res.json(data)
    },(err)=>{
        res.send(err.message)
    }

)
    
})
router.get('/category/:id',(req,res)=>{
     res.send(req.params.id)
})

module.exports= router