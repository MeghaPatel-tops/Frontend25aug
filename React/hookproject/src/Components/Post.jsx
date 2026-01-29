import React, { useContext } from 'react'
import { PostContext } from './postContext'

function Post() {
    const postArray = useContext(PostContext);
    console.log("post comp=",postArray);
    
  return (
    <div>Post</div>
  )
}

export default Post