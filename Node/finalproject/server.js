const express = require('express');
const connection = require('./database/db');
const AdminRoute = require('./Routes/AdminRoute')
const cors = require("cors");



const app = express();
app.use('/uploads', express.static('uploads'));

app.use(
  cors({
    origin: "http://localhost:5174", // Your React app URL
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connection()
app.get('/',(req,res)=>{
    res.send("app working")
})

app.use('/admin',AdminRoute)

app.listen(3000,()=>{
    console.log(` app running on:http://localhost:3000/`);
    
})