import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Counter from './Counter'
import Home from './Home'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'
import { logout } from './Redux/Authcheck'

function App() {
  const dispatch = useDispatch();
  const {isloggedin}= useSelector((state)=>state.auth)

  return (
    
    <>
    {isloggedin}
    <nav>
         <ul>
          <li>
            <NavLink to={'/'}>Dashbord</NavLink>
          </li>
            <li>
            <NavLink to={'/home'}>Home</NavLink>
          </li>
           {
               isloggedin == true?
                 <li>
                      <button onClick={()=>{
                        dispatch(logout())
                      }}>Logout</button>
                 </li>:
                  <li>
            <NavLink to={'/login'}>Login</NavLink>
          </li>
           }
         </ul>
    </nav>
        <Routes>
            <Route path='/' element={<Counter/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    
    
    </>
  )
}

export default App
