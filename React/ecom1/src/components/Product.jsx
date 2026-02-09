import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Product() {
  const [products,setProducts]=useState([]);

  const delProduct = async(pid)=>{
      try {
        const res = await axios.delete('http://localhost:3000/products/'+pid);
        if(res){
          alert('Product Deleted !');
          getProducts();
        }
      } catch (error) {
        
      }
  }

  const getProducts = async()=>{
    try {
        let res = await axios.get('http://localhost:3000/products');
        let result = res.data;
        setProducts(result)
    } catch (error) {
        console.log(error);
        
    }
  }

  useEffect(()=>{
      getProducts();
  },[])

  return (
    <div style={{padding:"100px"}}>
        

        <NavLink to={'/product/add'} className={"text-white bg-blue-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 my-5 focus:outline-none"} style={{marginTop:"50px !important"}}>Add New</NavLink>

        <div className="container box-border p-5">
          <h2 class="text-3xl font-bold underline my-5"> Product
        </h2>
             <table class="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500">
                  <thead>
                    <tr>
                      <th  class="border border-gray-300 dark:border-gray-600">SRNO</th>
                      <th  class="border border-gray-300 dark:border-gray-600">Product Name</th>
                      <th  class="border border-gray-300 dark:border-gray-600">Price</th>
                      <th  class="border border-gray-300 dark:border-gray-600">Description</th>
                      <th  class="border border-gray-300 dark:border-gray-600">Image</th>
                       <th colSpan={2} class="border border-gray-300 dark:border-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        products && products.map((index,i)=>(
                             <tr key={i}>
                              <td  class="border border-gray-300 dark:border-gray-600">{i+1}</td>
                              <td  class="border border-gray-300 dark:border-gray-600">{index.pname}</td>
                              <td  class="border border-gray-300 dark:border-gray-600">{index.price}</td>
                              <td  class="border border-gray-300 dark:border-gray-600">{index.description}</td>
                              <td  class="border border-gray-300 dark:border-gray-600"><img src={index.pimage} alt="" style={{height:"50px !important",width:"100px"}} /></td>
                              <td><button onClick={()=>{
                                delProduct(index.id)
                              }} className="text-white bg-red-500 box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">DELETE</button></td>
                               <td><NavLink to={'/product/edit/'+index.id} className="text-white bg-green-500 box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">EDIT</NavLink></td>
                             </tr>
                        ))
                      }
                  </tbody>
                </table>
        </div>
    </div>
  )
}

export default Product