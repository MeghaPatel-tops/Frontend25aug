const express = require('express');
const { createStudent, getAllStudent, getStudentById, deleteStudentById, updateStudentById } = require('../Controller/StudentController');


const router = express.Router();

router.post('/create', (req, res) => {
    createStudent(req, res, (data) => {
        res.status(200).json(data);
    }, (err) => {
        res.status(500).json(err)
    });
})


router.get('/', (req, res) => {
    console.log("hjhjhshchjjh");

    getAllStudent(req, res, (data) => {
        res.status(200).json(data)
    }, (err) => {
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    getStudentById(req, res, (data) => {
        res.status(200).json(data)
    }, (err) => {
        res.status(500).json(err)
    });
})

router.delete('/deletestudent/:id', (req, res) => {
    console.log("gererrerer");

    console.log(req.params.id);

    deleteStudentById(req, res, (data) => {
        res.status(200).json(data);
    }, (err) => {
        res.status(500).json(err.message)
    })
})

router.patch('/update/:id', (req, res) => {
    updateStudentById(req, res, (data) => {
                res.status(200).json(data)
            }, (err) => {
                res.status(500).json(err)
            }) 
    })
module.exports = router