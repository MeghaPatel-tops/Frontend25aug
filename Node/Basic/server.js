const { log } = require('console');
const http = require('http');
const { writeFileFun, readFileFun } = require('./filehandling');
const { pathModuleExample } = require('./pathexample');
const { osTask } = require('./osmodule');
const { EventExample } = require('./eventmodule');
const {readFileUsingPromise, readFileUsingasync, getProduct} = require('./promiseexample');




// osTask();
// writeFileFun();
// readFileFun()
// pathModuleExample();
// EventExample();

// readFileUsingPromise()
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

//readFileUsingasync();
getProduct();

const server = http.createServer((req,res)=>{
  
    res.write('hello world');
    res.end();
})

server.listen(3000,()=>{
      console.log('Server running on port 3000');
})