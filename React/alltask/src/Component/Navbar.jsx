import React, { useContext, useEffect, useState } from 'react'
import Login from './Login'
import { AuthContext } from './AuthContext'


function Navbar() {
  const {flag,setFlag}=useContext(AuthContext);
  const [user,setUser]=useState({})

  const logout =()=>{
       if(flag==1){
          localStorage.removeItem('session-user')
          setFlag(0)
       }
  }
 
 useEffect(()=>{
      if(flag==1){
          setUser(JSON.parse(localStorage.getItem('session-user')))
      }
      console.log(user);
      
 },[flag,setFlag])
 
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark text-white">
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">Ecom</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Link</a>
        </li>
        
     
      </ul>
     <div>
      {
            flag==1 ? 
            <div>
              <span>Welcome:{user.username}</span>
              <button class="nav-link text-white" onClick={logout}>Logout</button>
              </div>
              :
          <Login/>
      }
     
             

      
       
     </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar