import React, { useState } from 'react'

function Users() {
    const [user,setUser]=useState({});

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
        
        
    }

    const handleClick = ()=>{
        console.log(user);
        
    }
  return (
    <div>
        <form class="max-w-sm mx-auto">
            <h1 className='text-5xl'>Registration</h1>
  <div class="mb-5 mt-5">
    
    <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Enter User Name</label>
    <input type="text" id="fruit" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"  required name='username' onChange={handleChange}/>
  </div>
   <div class="mb-5">
    
    <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Enter User Email</label>
    <input type="email" id="fruit" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"  required name='email' onChange={handleChange} />
  </div> <div class="mb-5">
    
    <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Enter User Contact</label>
    <input type="text" id="fruit" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"  required name='contact' onChange={handleChange}/>
  </div>
 
  <button type="button" class="text-white bg-blue-500 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={handleClick}>Submit</button>
   
</form>

    </div>
  )
}

export default Users