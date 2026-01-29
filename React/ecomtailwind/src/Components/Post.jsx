import React, { useEffect, useState } from 'react'

function Post() {
    const [post,setPost]=useState([]);

    const getPost = async()=>{
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/posts');
            const postData = await result.json();
            //console.log(postData);
            setPost(postData)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getPost()
    },[])
  return (
    <div><h1>Post Details</h1>
            <ul>
                {
                    post.map((index,i)=>(
                        <li key={i}>{index.title}</li>
                    ))
                }
            </ul>

    </div>
  )
}

export default Post