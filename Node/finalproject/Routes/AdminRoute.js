const express = require('express');
const upload = require('../comman/multerConfig');
const router = express.Router();

router.post('/category/create',upload.single('cimage'),(req,res)=>{
        res.json(req.filename)
})

module.exports = router