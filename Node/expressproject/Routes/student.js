const express = require('express');
const { createStudent, getAllStudent, getStudentById } = require('../Controller/StudentController');


const router = express.Router();

router.post('/create',(req,res)=>{
     createStudent(req,res,(data)=>{
        res.status(200).json(data);
     },(err)=>{
        res.status(500).json(err)
     });
})


router.get('/',(req,res)=>{
    
    getAllStudent(req,res,(data)=>{
        res.status(200).json(data)
    },(err)=>{
        res.status(500).json(err)
    })
})

router.get('/:id',(req,res)=>{
    getStudentById(req,res,(data)=>{
        res.status(200).json(data)
    },(err)=>{
        res.status(500).json(err)
    });
})
module.exports= router