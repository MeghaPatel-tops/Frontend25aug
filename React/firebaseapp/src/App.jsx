import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Userindex from './assets/User/Userindex'
import Adminindex from './assets/Admin/Adminindex'
import Productindex from './assets/Admin/Product/Productindex'
import Adminproduct from './assets/Admin/Product/Adminproduct'
import Productedit from './assets/Admin/Product/Productedit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
            <Route path='/' element={<Userindex/>}></Route>
            <Route path='/admin' element={<Adminindex/>}></Route>
            <Route path='/admin/product/create' element={<Productindex/>}></Route>
            <Route path='/admin/product' element={<Adminproduct/>}></Route>
            <Route path='/admin/product/edit/:pid' element={<Productedit />}></Route>
        </Routes>
    </>
  )
}

export default App
