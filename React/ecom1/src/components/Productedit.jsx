import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Productedit() {
    const pid = useParams().id;
    const [product,setProduct]=useState({});
    console.log(pid);
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name,value}=e.target;
        setProduct({
            ...product,
            [name]:value
        })
    }

    const getProductByID = async()=>{
        try {
            let res = await axios.get('http://localhost:3000/products/'+pid);
            let data = res.data;
            console.log(data);
            setProduct(data)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const updateProduct = async()=>{
         try {
            let res = await axios.put('http://localhost:3000/products/'+pid,product);
            if(res){
                alert('product updated!')
                navigate('/product')
            }
         } catch (error) {
              console.log(error);
              
         }
    }

    useEffect(()=>{
        getProductByID(pid)
    },[])
    
  return (
    <div>
             <h2 className='max-w-sm mx-auto text-lg text-heading'>Add New Product</h2>
<form class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Your Product Name</label>
    <input type="text" id="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"  required name='pname' value={product.pname} onChange={handleChange}/>
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Price</label>
    <input type="text" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" required name='price' value={product.price}  onChange={handleChange}/>
  </div>
   <div class="mb-5">
    <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Description</label>
    <input type="text" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" required name='description' value={product.description}  onChange={handleChange}/>
  </div>
   <div class="mb-5">
    <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Image</label>
    <input type="text" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" required name='pimage' value={product.pimage}  onChange={handleChange} />
  </div>
 
  <button type="button" class="text-black bg-gray-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={updateProduct} >Submit</button>
</form>

    </div>
  )
}

export default Productedit