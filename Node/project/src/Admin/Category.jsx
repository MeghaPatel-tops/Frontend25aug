import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { log } from 'firebase/firestore/pipelines';
import axios from 'axios';

function Category() {
  const dispatch = useDispatch();
  const [catArray ,setCatArray]= useState([])
  const [cat, setCat] = useState({
    cname: "",
    cimage: ""
  })
  const [cid,setCid]=useState(null);

  

  const handleChange = (e) => {
    setCat({
      cname: e.target.value
    })
  }
  const handleFile = (e) => {
    console.log(e.target.files[0]);

    const file = e.target.files[0];

    setCat({
      ...cat,
      cimage:file
    })
   

 

  }

  const handleClick =async (e) => {
    e.preventDefault();
   
    const formData =   new FormData();
   
    try {
      formData.append('cimage',cat.cimage);
        formData.append('cname',cat.cname)
        console.log(formData);
        let res = await axios.post("http://localhost:3000/admin/category/create",formData);
        if(res){
          console.log(res);
           getCategory();
           setCat({})
          
        }
    } catch (error) {
        console.log(error);
        
    }

  }

  const handleUpdate = async(e)=>{
     e.preventDefault();
   console.log(cat);
   
    const formData =   new FormData();
   
    try {
      formData.append('cimage',cat.cimage);
        formData.append('cname',cat.cname)
        console.log(formData);
        let res = await axios.patch("http://localhost:3000/admin/category/update/"+cid,formData);
        if(res){
          console.log(res);
          getCategory();
           setCat({})
        }
    } catch (error) {
        console.log(error);
        
    }

  }

  const getCategory = async()=>{
      try {
          let res = await axios.get('http://localhost:3000/admin/category');
          if(res){
            console.log(res.data);
            setCatArray(res.data.catdata)
            
          }
      } catch (error) {
        console.log( error);
        
      }
  }

   const getCatById = async(id)=>{
      try {
          let res = await axios.get('http://localhost:3000/admin/category/'+id);
          if(res){
            console.log(res.data);
            setCat(res.data.catdata)
            
          }
      } catch (error) {
        console.log( error);
        
      }
  }

  const deleteCategory = async(id)=>{
     try {
          let res = await axios.delete('http://localhost:3000/admin/category/'+id);
          if(res){
              alert('data deleted ')
            
          }
      } catch (error) {
          console.log(error);
          
      }
  }
  useEffect(
    () => {
      getCategory();
      
    }
    , [])

    // useEffect(()=>{
    //     console.log('edit');
    //     setCat(singleCat ?? {})

    //     console.log(cat);
        
        
    // },[singleCat])
  return (
    <div>
      <h2 className='text-2xl'>Add Category</h2>
     
      <form method='post'>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="first-name" class="block text-sm/6 font-medium text-gray-900">Category name</label>
                <div class="mt-2">
                  <input id="first-name" type="text" name="cname" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange} value={cat.cname ?? ''} />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Category image</label>
                <div class="mt-2">
                  <input id="last-name" type="file" name="cimage" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleFile} />
                </div>
              </div>

              <div class="sm:col-span-3">

                <div class="mt-2">
                 {
                     (cid == null) ?
                       <button className='p-2 bg-blue-600 text-white' onClick={handleClick}>Submit</button>
                     :
                      <button className='p-2 bg-blue-600 text-white' onClick={handleUpdate}>Update</button>

                 }
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="container mt-20">
        <div class="overflow-x-auto">
          <table class="min-w-full border border-gray-300">
            <thead class="bg-gray-100">
              <tr>
               
                <th class="border border-gray-300 px-4 py-2 text-left">SRNO</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Category Name</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Image</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                catArray && catArray.map((item, i) => (
                  <tr key={i}>
                    <td class="border border-gray-300 px-4 py-2">{i+1}</td>
                    <td class="border border-gray-300 px-4 py-2">{item.cname}</td>
                    <td class="border border-gray-300 px-4 py-2"> <img src={"http://localhost:3000/"+item.cimage} alt="" height={"100px"} width={"100px"} /></td>
                    <td><button className='bg-red-500 text-white p-2' onClick={()=>{
                        deleteCategory(item._id)
                    }}>Delete</button></td>
                    <td>
                      <button className='bg-green-500 text-white p-2' onClick={()=>{
                        setCid(item._id)
                        getCatById(item._id)
                      }}>Edit</button>
                    </td>
                  </tr>
                ))
              }



            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Category