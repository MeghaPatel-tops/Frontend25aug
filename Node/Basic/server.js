const { log } = require('console');
const http = require('http');
const { writeFileFun, readFileFun } = require('./filehandling');
const { pathModuleExample } = require('./pathexample');
const { osTask } = require('./osmodule');
const { EventExample } = require('./eventmodule');



osTask();
writeFileFun();
readFileFun()
pathModuleExample();
EventExample();


const server = http.createServer((req,res)=>{
  
    res.write('hello world');
    res.end();
})

server.listen(3000,()=>{
      console.log('Server running on port 3000');
})