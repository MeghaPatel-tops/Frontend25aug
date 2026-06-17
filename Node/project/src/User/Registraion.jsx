import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
function Registraion() {
  const [user, setUser] = useState({});
  const [err, setError] = useState(null);
  const [msg,setMsg]= useState(null)

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }
  const handleClick = async (e) => {

    e.preventDefault();
    try {
      let res = await axios.post('http://localhost:3000/registration', user);
    
      if (res.data.errors) {
        console.log(res.data.name);
        console.log(res.data.message);
        setError({ name: res.data.name, message: res.data.message })
      }
      else{
          setMsg(res.data.msg)
          setTimeout(()=>{
            navigate('/login')
          },2000)
      }

    } catch (error) {
      console.log(error.data.name);
      console.log(error.data.message);

    }


  }
  useEffect(() => {

  }, [err,msg])
  return (
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        {
          err && (<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {err.name  }:{err.message}
          </div>)
        }
        {
          msg && (<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {msg}
          </div>)
        }
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

        <form class="space-y-4" method='post'>
          <div>
            <label class="block font-medium text-gray-700 mb-1">Username</label>
            <input type="text" placeholder="Enter username"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" name='username' onChange={handleChange} />
          </div>


          <div>
            <label class="block font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="Enter email"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" name='email' onChange={handleChange} />
          </div>


          <div>
            <label class="block font-medium text-gray-700 mb-1">Password</label>
            <input type="password" placeholder="Enter password"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" name='pwd' onChange={handleChange} />
          </div>

          <div>
            <label class="block font-medium text-gray-700 mb-1">Contact</label>
            <input type="text" placeholder="Enter Contact"
              class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" name='contact' onChange={handleChange} />
          </div>

          <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" onClick={handleClick}>
            Register
          </button>

        </form>

        <p class="text-center text-gray-600 mt-4 text-sm">
          Already have an account?
          <NavLink href="#" class="text-blue-600 font-medium hover:underline" to={'/login'}>Login</NavLink>
        </p>

      </div>
    </div>
  )
}

export default Registraion