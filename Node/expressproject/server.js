const express = require('express');
const adminRoutes = require('./Routes/admin.js')
const loggingMiddleware = require('./Middleware/LoggingMiddleware.js')
const Exception = require('./Middleware/Exception.js')
const connectDb = require('./Database/db.js')
// const RateLimit = require('./Middleware/RateLimit.js')
const StudentRoute = require('./Routes/student.js')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(loggingMiddleware)
app.use(Exception)
// app.use(RateLimit)

connectDb();
app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get('/home',(req,res)=>{
    res.send('Home page')
})

app.use('/admin/',adminRoutes)
app.use('/student/',StudentRoute)

app.listen(3000,()=>{
      console.log(`Server is listening at http://localhost:3000`);

})