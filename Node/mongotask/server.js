const http = require('http')
const { connection, insertProduct, findAllProduct, updateProduct, deleteProduct } = require('./db')


//connection();
//insertProduct();
// findAllProduct();
// updateProduct();
deleteProduct();

const server = new http.createServer((req,res)=>{
    res.write('backend')
    
})

server.listen(3000,()=>{
     console.log("server run on 3000");
     
})

