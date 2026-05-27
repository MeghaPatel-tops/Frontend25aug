
const EventEmitter  = require('events');

function EventExample(){
    const event = new EventEmitter();
event.on('insert',()=>{
    console.log("event genrate");
    
})

event.emit('insert')
}

module.exports={EventExample}