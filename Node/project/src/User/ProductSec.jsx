import React, { useContext, useEffect, useMemo, useState } from 'react'


import { CategoryContext } from '../Context/CategoryContext';
import { addTOCart } from '../Redux/Cart';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductSec() {
  const [productArray, setProductArray] = useState([])
  const [cUser,setCUser]= useState(null);
  const navigate= useNavigate();

  const { catname, setCatName } = useContext(CategoryContext)

  //console.log(productArray);
  const getProductData = async () => {
    try {
      let res = await axios.get('http://localhost:3000/admin/product');
      if (res) {
        console.log(res.data.data);
        setProductArray(res.data.data)

      }
    } catch (error) {
      console.log(error);

    }
  }

 

  const FilterProduct = useMemo(() => {
    let newArray;
    if (catname != '') {

      newArray = productArray.filter((index, i) => {
        if (index.cname == catname) {
          return index
        }
      })

    }
    else {

      newArray = productArray
    }

    return newArray
  }, [catname, productArray])

  const addinCart = async(pid) => {
    if(!cUser){
       alert("Please Login first")
         navigate('/login')
     }
    
    
      try {
            let res = await axios.post('http://localhost:3000/addtocart',{pid:pid,uid:cUser.userId},
              {
                 headers: {
                    Authorization: `Bearer ${cUser.token}`
                }
              }
            );
           if(res.data.flag==1){
              alert("Product added")
           }
            
        } catch (error) {
            console.log(error);
            
        }
    
  }

  useEffect(()=>{
    let loogedUser = JSON.parse(localStorage.getItem('loggedUesr'))
     
    getProductData()
  },[])



  return (
    <div>


      <section id="catalog" class="max-w-7xl mx-auto px-4 py-16">
        <h3 class="text-3xl font-semibold mb-8 text-center">Product Catalog</h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {
            FilterProduct && FilterProduct.map((index, i) => (
              <div class="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg">
                <img src={"http://localhost:3000/"+index.pimage} class="w-100 h-48 object-cover" />
                <div class="p-4">
                  <h4 class="font-semibold text-lg">{index.pname}</h4>
                  <p class="text-gray-600">{index.price}</p>
                  <button class="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" onClick={() => {
                    addinCart(index._id)
                  }}>Add to Cart</button>
                </div>
              </div>
            ))
          }





        </div>
      </section>
    </div>
  )
}

export default ProductSec