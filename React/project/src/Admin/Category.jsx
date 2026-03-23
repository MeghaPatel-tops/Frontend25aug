import React, { useState } from 'react'

function Category() {
  const [cat,setCat]=useState({
    cname:"",
    cimage:""
  })

  const handleChange = (e)=>{
      setCat({
         cname:e.target.value
      })   
  }
  const handleFile = (e)=>{
       console.log(e.target.files[0]);

       const file = e.target.files[0];

       const reader = new FileReader();

       reader.readAsDataURL(file)

       reader.onload=()=>{
           setCat({
              ...cat,
              ['cimage']:reader.result
           })
       }
       
  }

  const handleClick = (e)=>{
    e.preventDefault();
       console.log(cat);
       
  }
  return (
    <div>
      <h2 className='text-2xl'>Add Category</h2>
      <form  method='post'>
        <div class="space-y-12">
          <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="first-name" class="block text-sm/6 font-medium text-gray-900">Category name</label>
                <div class="mt-2">
                  <input id="first-name" type="text" name="cname" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleChange}/>
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Category image</label>
                <div class="mt-2">
                  <input id="last-name" type="file" name="cimage" autocomplete="family-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" onChange={handleFile}/>
                </div>
              </div>

              <div class="sm:col-span-3">
               
                <div class="mt-2">
                    <button className='p-2 bg-blue-600 text-white' onClick={handleClick}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Category