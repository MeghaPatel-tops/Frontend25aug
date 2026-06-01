const { default: axios } = require('axios');
const { log } = require('console');
const fs = require('fs/promises');


function readFileUsingPromise(){
     return new Promise((resolve,reject)=>{
         
        fs.readFile('test.txt','utf-8',(err,data)=>{
              if(err){
                   reject(err)
                   console.log(err);
                   
                   return;
              }
              console.log(data);
              
              resolve(data)
        })
     })
}

async function readFileUsingasync(){
    try {
        const data = await fs.readFile('test.txt', 'utf-8');
        console.log("abc",data);
        
    } catch (error) {
        console.log(error);
        
    }

}

async function getProduct (){
    try {
        let products = await axios.get('https://fakestoreapi.com/products/1')
        console.log(products);
        
    } catch (error) {
        console.log(error);
        
    }
}



module.exports= {readFileUsingPromise,readFileUsingasync,getProduct}
