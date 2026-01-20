import React from 'react'
import styled from 'styled-components'

function Button(props) {
    const btnname = props.name
    const Primary = styled.button`
          background-color: blue;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
    `
  return (
    <Primary>{btnname}</Primary>
  )
}

export default Button