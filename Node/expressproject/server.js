const express = require('express');
const adminRoutes = require('./Routes/admin.js')
const loggingMiddleware = require('./Middleware/LoggingMiddleware.js')
const Exception = require('./Middleware/Exception.js')
const RateLimit = require('./Middleware/RateLimit.js')

const app = express();
app.use(loggingMiddleware)
app.use(Exception)
app.use(RateLimit)



app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get('/home',(req,res)=>{
    res.send('Home page')
})

app.use('/admin/',adminRoutes)

app.listen(3000,()=>{
      console.log(`Server is listening at http://localhost:3000`);

})