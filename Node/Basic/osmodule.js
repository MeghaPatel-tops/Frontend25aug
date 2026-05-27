const os = require('os');



 function  osTask(){
    console.log(os.platform());
    console.log(os.arch());
console.log(os.hostname());

    
}
osTask();

module.exports= {osTask}