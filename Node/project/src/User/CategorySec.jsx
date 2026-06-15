import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CategoryContext } from '../Context/CategoryContext';
import axios from 'axios';

function CategorySec() {
 const [catArray,setCatArray]=useState([]);
  const {catname,setCatName}=useContext(CategoryContext)

const getCategory = async () => {
    try {
      let res = await axios.get('http://localhost:3000/admin/category');
      if (res) {
        console.log(res.data);
        setCatArray(res.data.catdata)
      }
    } catch (error) {
      console.log(error);
    }
  }

 const dispatch = useDispatch()
  useEffect(()=>{
      getCategory();
  },[])
  return (
    <div>
      <section id="categories" class="max-w-7xl mx-auto px-4 py-16">
    <h3 class="text-3xl font-semibold mb-8 text-center">Shop by Category</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      {
          catArray && catArray.map((index,i)=>(
             <div class="bg-white shadow p-4 rounded-lg text-center hover:shadow-lg cursor-pointer">
              <button  onClick={()=>{
                alert(index._id)
                setCatName(index._id)
              }}>
              <img src={"http://localhost:3000/"+index.cimage} alt="" style={{height:'100px',width:'100px'}}/>
              {index.cname}</button></div>
          ))
      }
    
    </div>
  </section>
    </div>
  )
}
export default CategorySec