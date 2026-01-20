import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Counter from './components/Counter'
import Aside from './components/Aside'
import Blog from './components/Blog'
import Theme from './components/Theme'



function App() {
  const [count, setCount] = useState(0)
  const username="Megha";
  const Todo=[{id:101,title:"react assignment"},{id:102,title:"testing"}]

  return (
    <>
    <Navbar />
    <Aside />
      <h1>My first react app</h1>
      <p>Welcome to app:{username}</p>
       <ul>
            {
                Todo.map((index)=>(
                    <li>{index.title}|||{index.id}</li>
                ))
            }
        </ul>
      <Home name={username} Todo={Todo}/>
      <Counter/>
      <Blog />
      <Theme />
      <Footer />
    </>
  )
}

export default App
