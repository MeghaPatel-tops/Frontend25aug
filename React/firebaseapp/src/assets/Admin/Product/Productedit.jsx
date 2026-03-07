import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../../../firebase';

function Productedit() {
     const [product,setProduct]= useState({});
     const navigate = useNavigate();

     const pid=  useParams().pid;

     const getProductById = async(pid)=>{
        try {
            let docRef = doc(db,"products",pid);
            let res = await getDoc(docRef);
            let result = res.data();
            console.log(result);
            setProduct(result)
            
        } catch (error) {
            console.log(error);
            
        }
     }

     useEffect(()=>{
        getProductById(pid)
     },[])

     const handleChange =(e)=>{
            const {name,value}=e.target;
            setProduct({
                ...product,
                [name]:value
            })
     }
     const handleClick=async()=>{
          try {
               const docRef = doc(db,"products",pid);
               let res = await updateDoc(docRef,product);
              
                  alert("Product Updated");
                  navigate('/admin/product')
              
          } catch (error) {
               console.log(error);
               
          }
     }
  return (
    <div className='container mx-auto bg-gray-200'>
            <form>
  <div class="space-y-12">
   

    <div class="border-b border-gray-900/10 pb-12 pt-10">
      <h2 class="text-3xl font-semibold text-gray-900">Enter Product Details</h2>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm/6 font-medium text-gray-900">Product name</label>
          <div class="mt-2">
            <input id="first-name" type="text" name="pname" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange} value={product.pname} />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Image</label>
          <div class="mt-2">
            <input id="last-name" type="text" name="pimg" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange} value={product.pimg}/>
          </div>

          
        </div>

  
      </div>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm/6 font-medium text-gray-900">Product Price</label>
          <div class="mt-2">
            <input id="first-name" type="text" name="price" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange} value={product.price}/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Description</label>
          <div class="mt-2">
            <input id="last-name" type="text" name="description" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange} value={product.description} />
          </div>

          
        </div>

  
      </div>
    </div>

   
  </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    
    <button type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleClick}>Save</button>
  </div>
</form>
    </div>
  )
}

export default Productedit