import { lazy, useState,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
// import Home from './Home'
// import About from './About'


const Home = lazy(()=>import('./Home'))
const About = lazy(()=>import('./About'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
         <Suspense fallback={<h2>Loading...</h2>}></Suspense>
          <ul>
              <li>
                <NavLink to={'/about'}>About</NavLink>

              </li>
               <li>
                <NavLink to={'/home'}>Home</NavLink>
                
              </li>
          </ul>
         <Routes>
             <Route path='/about' element={<About/>}></Route>
             <Route path='/home' element={<Home/>}></Route>
         </Routes>
           
      </section>

      
    </>
  )
}

export default App
