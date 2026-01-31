import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { PostContext } from './Components/postContext'
import Post from './Components/Post'
import Comment from './Components/Comment'
import Home from './Components/Home'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import ThemeChanger from './Components/ThemeChanger'



function App() {
  const [count, setCount] = useState(0)
  const [post,setPost]=useState([]);
  const getPost = async()=>{
      try {
          let result =await fetch('https://jsonplaceholder.typicode.com/posts');
          let postsData = await result.json();
        
          setPost(postsData)
      } catch (error) {
        console.log(error);
        
      }
  }

  useEffect(()=>{
      getPost();
  },[])

  return (
    <>
          {/* <PostContext.Provider value={post}>
               <Post />
               <Comment />
          </PostContext.Provider> */}

          <ThemeChanger />
               <Home />
                <Hero />
                <Footer />
         
         
    </>
  )
}

export default App
