import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import Services from './components/Services'
import Gallary from './components/Gallary'
import Productadd from './components/Productadd'
import Productedit from './components/Productedit'
import Filterapply from './components/Filterapply'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />
    
       <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/product/add' element={<Productadd />}></Route>
              <Route path='/product/edit/:id' element={<Productedit />}></Route>
            <Route path='/service' element={<Services/>}></Route>
            <Route path='/gallary' element={<Gallary/>}></Route>
             <Route path='/filter' element={<Filterapply/>}></Route>
       </Routes>

    </>
  )
}

export default App
