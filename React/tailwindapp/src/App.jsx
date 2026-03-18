import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import { Route, Routes } from 'react-router-dom'
import Wrok from './Wrok'
import Project from './Project'
import Contact from './Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className=''>

        
        <Navbar />
        <Hero />
        <About />
        <Wrok />
        <Project />
        <Contact />
      </div>
    </>
  )
}

export default App
