import React, { useEffect, useRef } from 'react'

function Counter() {
    const count = useRef(0);
    const nameRef = useRef();

    useEffect(()=>{
          nameRef.current.focus();
    },[])



  return (
    <div>
      <input type="text" name="" id="" ref={nameRef} />
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