import React, { useContext } from 'react'
import { PostContext } from './postContext'

function Comment() {
    let postArray = useContext(PostContext);
    console.log('comment data post',postArray);
    
  return (
    <div>Comment</div>
  )
}

export default Comment