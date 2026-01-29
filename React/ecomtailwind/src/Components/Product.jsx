import React, { useEffect, useState } from 'react'

function Product() {
    const [count,setCount]=useState(0);
    const [int,setIn]=useState(0);
    const [x,setX]=useState(0);
    // useEffect(()=>{
    //     console.log("use effect called");
        
    // })
    //  useEffect(()=>{
    //     console.log("use effect called");
        
    // },[])
    //  useEffect(()=>{
    //     console.log("use effect called");
        
    // },[count])
    useEffect(()=>{
        const timerId = setInterval(()=>{
            let m=x+1
            setX(m)
            console.log("Timr function called",x);
            
        },2000);

        return ()=>{
            clearInterval(timerId)
        }
    },[])
  return (
    <div>Product
        <div>
            <button className='bg-blue-500 p-5 text-white' onClick={()=>{
                setCount(count+1)
            }}>+</button>
        <span className='text-2xl'>{count}</span>
        <button className="bg-blue-500 p-5 text-white"  onClick={()=>{
                setCount(count-1)
            }}>-</button>

            <br />
            <button onClick={()=>{
                setIn(100);
            }}>Click ME</button>
        </div>
        
     </div>
  )
}

export default Product