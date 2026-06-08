const express = require('express');
const connection = require('./database/db');
const AdminRoute = require('./Routes/AdminRoute')

const app = express();
app.use('/uploads', express.static('uploads'));

connection()
app.get('/',(req,res)=>{
    res.send("app working")
})

app.use('/admin',AdminRoute)

app.listen(3000,()=>{
    console.log(` app running on:http://localhost:3000/`);
    
})