import React, { useState } from 'react'

function Fruits() {
    const [fname,setFname]=useState("");
    const [flist,setFlist]=useState([]);
    const [id,setId]=useState(null)

    const handleChange =(e)=>{
        setFname(e.target.value)
       
    }
    const handlClick= ()=>{
        let newArray = [...flist,fname];
        setFlist(newArray)
        setFname("")
        

        console.log(newArray);
        
        
    }
    const delFruits = (id)=>{
        let newFruits = flist.filter((index,i)=>{
             if(i!=id){
                return index;
             }
        })
        console.log(newFruits);
        setFlist(newFruits)
        
    }
    const editFruits =(id)=>{
        setFname(flist[id]);
        setId(id)
    }
    const handleUpdate=()=>{
        
       
        let newArray = flist.map((item,i)=>(i === id ? fname : item))
        console.log(newArray);
        setFlist(newArray)
        
        
    }
  return (
    <div>
        
        
<form class="max-w-sm mx-auto">
  <div class="mb-5">
    <h1 className='text-5xl'>Fruits List</h1>
    <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Enter Fruit Name</label>
    <input type="text" id="fruit" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"  required name='fruit' onChange={handleChange} value={fname}/>
  </div>
 
  <button type="button" class="text-white bg-blue-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={handlClick}>Submit</button>
   <button type="button" class="text-white bg-blue-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={handleUpdate}>Update</button>
</form>


<div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
                <th scope="col" class="px-6 py-3 font-medium">
                    Fruits Name
                </th>
                <th>Action</th>
               
            </tr>
        </thead>
        <tbody>
          {
                 flist.map((index,i)=>(
                      <tr class="bg-neutral-primary border-b border-default" key={i}>
               
                        <td class="px-6 py-4">
                            {index}
                        </td>
                        <td>
                            <button className='bg-red-500 text-white p-2' onClick={()=>{
                                delFruits(i)
                            }}>DELETE</button>
                             <button className='bg-green-500 text-white p-2' onClick={()=>{
                                editFruits(i)
                            }}>EDIT</button>
                        </td>
                        
                    </tr>
                 ))
          }
           
           
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Fruits