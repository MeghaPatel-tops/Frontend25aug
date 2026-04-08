import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Adminindex from './Admin/Adminindex'
import Userindex from './User/Userindex'
import { CategoryProvider } from './Context/CategoryContext'
import Registraion from './User/Registraion'



function App() {
 
  return (
    <>
      
      
       <Routes>
         <Route path='/' element={<Userindex />}></Route>
         <Route path='/registration' element={<Registraion/>}></Route>





         {/* Admin route */}
         
            <Route path='/admin/*' element={<Adminindex />}></Route>
        
          
       </Routes>
           </>
  )
}

export default App
