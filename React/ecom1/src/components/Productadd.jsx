import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Productadd() {

    const [product,setProduct]=useState({});
    const navigate = useNavigate();
    
    const handleChange = (e)=>{
        const {name,value}=e.target;
        setProduct({
            ...product,
            [name]:value
        })
    }

    const handleClick = async()=>{
        try {
            let res = await axios.post('http://localhost:3000/products',product);
            if(res){
              alert("Data successfully added!")
              navigate('/product')
            }
        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <div>
        <h2 className='max-w-sm mx-auto text-lg text-heading'>Add New Product</h2>
<form class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Your Product Name</label>
    <input type="text" id="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"  required name='pname' onChange={handleChange}/>
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Price</label>
    <input type="text" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" required name='price' onChange={handleChange}/>
  </div>
   <div class="mb-5">
    <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Description</label>
    <input type="text" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" required name='description' onChange={handleChange}/>
  </div>
   <div class="mb-5">
    <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Image</label>
    <input type="text" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" required name='pimage' onChange={handleChange}/>
  </div>
 
  <button type="button" class="text-black bg-gray-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={handleClick}>Submit</button>
</form>

    </div>
  )
}

export default Productadd