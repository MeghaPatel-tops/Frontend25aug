const Student = require('../Model/Student.js')
const createStudent = async (req,res,data,err)=>{
    try {
        const result = await Student.create(req.body);
        data(result)
        
    } catch (error) {
        console.log(error);
        err(error)
    }
}

const getAllStudent = async (req,res,data,err)=>{
    try {
        const studentData = await Student.find();
        data(studentData)
    } catch (error) {
        err(error)
    }
}

const getStudentById = async (req,res,data,err)=>{
    try {
         const student = await Student.findById(req.params.id)
         data(student) 
         
    } catch (error) {
        err(error)
    }
}

const deleteStudentById= async(req,res,data,err)=>{
    try {
        const result = await Student.findByIdAndDelete(req.params.id);
        data(result)
    } catch (error) {
        err(error)
    }
}

const updateStudentById= async(req,res,data,err)=>{
    try {
        let res = await Student.updateOne({_id:Object(req.params.id)},req.body)
        data(res)
    } catch (error) {
        err(error)
    }
}

module.exports = {createStudent,getAllStudent,getStudentById,deleteStudentById,updateStudentById}