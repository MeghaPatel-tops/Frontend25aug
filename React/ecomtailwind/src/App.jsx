import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar.jsx/Navbar'
import Slider from './Components/Slider'
import Hero from './Components/Hero'
import Fruits from './Components/Fruits'
import Users from './Components/Users'
import Product from './Components/Product'
import Counter from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Navbar/>

        <Hero /> */}
        {/* <Fruits /> */}
        {/* <Users /> */}
        <Counter />
    </>
  )
}

export default App
