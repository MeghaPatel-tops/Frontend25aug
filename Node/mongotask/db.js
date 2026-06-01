const { MongoClient, ObjectId } = require("mongodb");


const url = "mongodb+srv://meghapatel1tops:Megha123@cluster0.wfiv5.mongodb.net/"
const client = new MongoClient(url)

const dbName = "nodedbaug"

async function connection(){
    try {
        await client.connect();
          console.log('MongoDB Connected');

        const db = client.db(dbName);

        return db;
    } catch (error) {
        console.log(error);
        
    }
}

async function insertProduct(){
    try {
        
        const db =await  connection();
        const collection = db.collection('productdata')

        const insertResult = await collection.insertOne({
            'pname':'laptyop',
            'price':21000,
            'description':'lenovo'
        })
        console.log(insertResult);
        
    } catch (error) {
        console.log(error);
        
    }
}

async function findAllProduct(){
    try {
        const db = await connection();
        const collection = db.collection('productdata')
        const data = await collection.find().toArray();
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}
//6a196853afff8fa0b3570a4c
async function updateProduct(){
    try {
        const db = await connection();
        const collection = db.collection('productdata');

        const result = await collection.updateOne({_id:new ObjectId('6a196853afff8fa0b3570a4c')},{
            $set:{
            'pname':'laptop lenovo jkhjh',
            'price':21000,
            'description':'lenovo'
        }
        })
        console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
}

async function deleteProduct(){
    try {
       const db = await connection();
       const collection = db.collection('productdata');
       const result = await collection.deleteOne(
        {_id:new ObjectId('6a196853afff8fa0b3570a4c')}
       ) 
       console.log(result);
       
    } catch (error) {
         console.log(error);
    }
}

module.exports={connection,insertProduct,findAllProduct,updateProduct,deleteProduct}