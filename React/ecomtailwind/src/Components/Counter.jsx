import React, { useRef } from 'react'

function Counter() {
    const count = useRef(0)
  return (
    <div>
         <button className='bg-blue-500 p-5 text-white' onClick={()=>{
                  count.current+=1
                  console.log(count.current);
                  
            }}>+</button>
       {count.current}
        <button className="bg-blue-500 p-5 text-white"  onClick={()=>{
                  count.current-=1
                    console.log(count.current);
            }}>-</button>
    </div>
  )
}

export default Counter