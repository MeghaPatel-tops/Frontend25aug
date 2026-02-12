import React, { useMemo, useState } from 'react'

function Filterapply() {

    const catarray=['fruits','vegetable','dairyproduct'];
    const [catid,setCatid]=useState(0);
    const product =[
        {
            pname:"apple",
            price:200,
            unit:"1kg",
            catid:1
        },
         {
            pname:"banana",
            price:50,
            unit:"1kg",
            catid:1
        },
         {
            pname:"potato",
            price:100,
            unit:"2kg",
            catid:2
        },
         {
            pname:"Tomato",
            price:50,
            unit:"1kg",
            catid:2
        },
         {
            pname:"milk",
            price:40,
            unit:"1pkg",
            catid:3
        },
         {
            pname:"Ghee",
            price:700,
            unit:"1kg",
            catid:3
        },
    ]

    const filterProduct = useMemo(()=>{
          if(catid==0){
              return product;
          }
          else{
             let newArray = product.filter((index,i)=>{
            if(index.catid==catid){
                return index
            }
        })
        return newArray;
          }
    },[catid])



    console.log(filterProduct);
    
const handleClick = (id)=>{
    
      setCatid(id)
}

  return (
    <div className='p-20'>
        <h1 className='text-3xl my-5'>Filterapply</h1>
        <ul className='flex gap-5'>
             <li>
                        <button className='bg-red-500 text-white p-3' onClick={()=>{
                            handleClick(0)
                        }}>ALL</button>
                      </li>
            {
                catarray.map((index,i)=>(
                      <li>
                        <button className='bg-red-500 text-white p-3' onClick={()=>{
                            handleClick(i+1)
                        }}>{index.toUpperCase()}</button>
                      </li>
                ))
            }
        </ul>
        <table className='border border-black-500 mt-10'>
            <thead>
                <tr>
                    
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Unit</th>

                </tr>
            </thead>
            <tbody>
                {
                    filterProduct.map((index,i)=>(
                        <tr key={i}>
                            <td>{index.pname}</td>
                            <td>{index.price}</td>
                            <td>{index.unit}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Filterapply