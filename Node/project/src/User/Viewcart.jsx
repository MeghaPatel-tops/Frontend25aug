import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartData, updatecartData, viewCartData } from '../Redux/Cart';
import axios from 'axios';
import { addDoc, collection,query,getDocs,deleteDoc,where } from 'firebase/firestore';
import { db } from '../Firebase/firebase';



function Viewcart() {
   let userInfo = JSON.parse(localStorage.getItem('loggedUesr'));
  const [userAuth,setUserAuth]=useState({})
    const dispatch = useDispatch()
    const [cartData,setCartData]=useState([])
    const [cartMsg,setCartMsg]=useState("")
    const {cartError} = useSelector((state)=>state.cart)
    const [total,setTotal] = useState(0);
    const [q,setQ] = useState(0)
    const [pid,setpid]=useState([])

   
    
//=================================Pay============================
  const handlePayment = async () => {
    console.log(userInfo.userId);
    console.log(total);
    console.log(pid);
    const res = await axios.post("http://localhost:3000/create-order",{total:total,uid:userInfo.userId,pid:pid}, {
                 headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
              });

    const order = res.data;
    console.log(order);
    
    

    const options = {
      key: "",
      amount: order.total,
      currency: order.currency,
      name: "My Shop",
      description: "Test Transaction",
      order_id: order.id,

      handler: async function (response) {

        let payObj={rzp_pay_id:response.razorpay_payment_id,orderid:order.order.id,status:"success",uid:userInfo.userId };
        console.log(payObj);
        
            const res = await axios.post("http://localhost:3000/payments",payObj, {
                 headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
              });
        
        console.log("Payment Success");

          console.log();

          
        alert("Payment Successful");
      },

      prefill: {
        name: "Megha",
        email: "test@gmail.com",
        contact: "9999999999",
      },

      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.open();
  };
//========================
    const updateQty= async(cartid,qty)=>{
        console.log(cartid);
        console.log(qty);
        try {
             setQ(q+1)
           let res = await axios.post('http://localhost:3000/updatecart/',{
               qty:qty,
               cartid:cartid
           }, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            })
           
        } catch (error) {
          
        }
        
    }

    const deleteCartData = async(cartid)=>{
        
        try {
             setQ(q+1)
           let res = await axios.post('http://localhost:3000/deletecart/',{
              
               cartid:cartid
           }, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            })
           
        } catch (error) {
            console.log(error);
            
        }
    }
    const getCartData=async()=>{
        try {
   
           let res = await axios.get('http://localhost:3000/cart/'+userInfo.userId, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            })
            console.log(res.data);
            setCartData(res.data)
        } catch (error) {
             console.log(error);
             
        }
    }

    useEffect(()=>{
          getCartData();
    },[q])

    useEffect(()=>{
         let pidArray =[];
          if(cartData){
            let total1 = cartData.reduce((sum,index,i)=>{
                  sum += (index.pid.price * index.qty);
                  pidArray.push(index.pid._id)
                  return sum
            },0);

           setTotal(total1)
           setpid(pidArray)
           
        }
    },[cartData,cartMsg])
  return (
    <div class="overflow-x-auto p-6">
        {
            cartMsg&& <p>{cartMsg}</p>
        }
         <table class="w-full border border-gray-200 rounded-lg overflow-hidden">
    
    <thead class="bg-gray-100">
      <tr>
        <th class="p-3 text-left">Product</th>
        <th class="p-3 text-left">Price</th>
        <th class="p-3 text-left">Quantity</th>
        <th class="p-3 text-left">Total</th>
        <th class="p-3 text-center">Action</th>
      </tr>
    </thead>

    <tbody>
      
      

      {

          cartData && cartData.map((index,i)=>(
            <tr class="border-t">
        <td class="p-3 flex items-center gap-3">
          <img 
            src={"http://localhost:3000/"+index.pid.pimage} 
            class="w-14 h-14 rounded"
          />
          <div>
            <h2 class="font-semibold">{index.pid.pname}</h2>
            <p class="text-sm text-gray-500">Size: L</p>
          </div>
        </td>

        <td class="p-3 font-medium">{index.pid.price}</td>

        <td class="p-3">
          <input 
            type="number" 
            value={index.qty}
            class="w-16 border rounded px-2 py-1 outline-none focus:ring-2 focus:ring-blue-400"
            min={1}
            onChange={(e)=>{
                updateQty(index._id,e.target.value)
            }}
          />
        </td>

        <td class="p-3 font-semibold">{index.pid.price * index.qty}</td>

        <td class="p-3 text-center">
          <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={()=>{
              deleteCartData(index._id)
          }}>
            Remove
          </button>
        </td>
      </tr>
          ))
      }

    </tbody>
  </table>

  <div class="flex justify-end mt-6">
    <div class="bg-gray-100 p-5 rounded-lg w-72">
      <h2 class="text-xl font-bold mb-4">Cart Summary</h2>

      

      <div class="flex justify-between font-bold text-lg border-t pt-3">
        <span>Total</span>
        <span>{total}</span>
      </div>

      <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded mt-4" onClick={handlePayment}>
        Checkout
      </button>
    </div>
  </div>


    </div>
  )
}

export default Viewcart