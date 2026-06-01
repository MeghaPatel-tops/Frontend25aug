const fs = require('fs')
const LoggingMiddleware = (req,res,next)=>{
      req.time = new Date(Date.now()).toString();

    let str= `\n ${req.method }-${req.hostname}-${ req.path}-${req.time}`
    fs.appendFile('log.txt',str,(err)=>{
        console.log(err);
        
    })
    next();
    
}

module.exports = LoggingMiddleware