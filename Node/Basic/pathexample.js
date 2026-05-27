const { log } = require('console');
const path = require('path');

function pathModuleExample(){
    
console.log(path.basename(__filename));
console.log(path.basename(__dirname));
console.log(path.extname(__filename));

}

module.exports={pathModuleExample}
