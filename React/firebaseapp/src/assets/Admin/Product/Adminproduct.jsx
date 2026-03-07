import { collection, query,onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase';
import { NavLink } from 'react-router-dom';

function Adminproduct() {

    const [products,setProducts]=useState([]);

    const getData = async()=>{
        try {
            let q=query(collection(db,"products"));
            const  docCol= onSnapshot(q,(querySnaphort)=>{
                let productArray=[];
                querySnaphort.forEach((doc)=>{
                    productArray.push({...doc.data(),id:doc.id})
                })
                console.log(productArray);
                
                setProducts(productArray)

            })
        } catch (error) {
            console.log(error);
            
        }
    }

    const deleteProduct= async(pid)=>{
        try {
            let docRef = doc(db,"products",pid);
            let res = await deleteDoc(docRef);
            if(res){
                alert("Product Deleted");
                getData();
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <div className='container bg-gray-200 mx-auto p-12'>
       <h2 className='text-3xl mb-10'>Product Details</h2>

       <NavLink to={'/admin/product/create'} className={"px-5  py-2 bg-blue-500 text-white"}>Add New</NavLink>
            <table class="border-collapse border border-blue-900 mt-10">
                <thead>
                    <tr>
                    <th class="border border-blue-300 ...">Product Name</th>
                    <th class="border border-blue-300 ...">Image</th>
                    <th class="border border-blue-300 ...">Price</th>
                    <th class="border border-blue-300 ...">Description</th>
                    <th colSpan={2} class="border border-blue-300 ...">Action</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {
                        products.map((index,i)=>(
                             <tr key={i}>
                            <td class="border border-blue-300 ...">{index.pname}</td>
                            <td class="border border-blue-300 ...">
                                <img src={index.pimg} alt="" height={"100px"} width={"100px"} />
                            </td>
                             <td class="border border-blue-300 ...">{index.price}</td>
                              <td class="border border-blue-300 ...">{index.description}</td>
                              <td>
                                <button className='p-2 bg-red-500 text-white' onClick={()=>{
                                    deleteProduct(index.id)
                                }}>Delete</button>
                              </td>
                              <td>
                                   <NavLink to={'/admin/product/edit/'+index.id}class="p-2 bg-green-900 text-white">Edit</NavLink>
                              </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
    </div>
  )
}

export default Adminproduct