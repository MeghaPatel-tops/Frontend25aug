import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function Blog() {
    const BlogData = styled.div`
     width: 100%;
    border: 10px solid black;
    padding: 50px;
     p{
       color:red
     }
    `
  return (
    <div>
        <BlogData>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit voluptate, laudantium minus nobis tenetur vero modi impedit ullam non fuga commodi dolorum aspernatur illum similique reprehenderit perspiciatis quam officiis quaerat.</p>
            <Button name="Read More"></Button>
        </BlogData>
    </div>
  )
}

export default Blog