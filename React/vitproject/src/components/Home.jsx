import React from 'react'
import './Home.css'

function Home(props) {
    const name = props.name
    const Todo = props.Todo
    props.Todo[0].title="abc";
  return (
    <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi fugiat similique quos? Dignissimos assumenda ipsum consectetur quis ea voluptatum, non totam libero aperiam, suscipit minima laborum magni. Tenetur, ex earum. -{name}</p>

        <ul>
            {
                Todo.map((index)=>(
                    <li>{index.title}|||{index.id}</li>
                ))
            }
        </ul>

    </div>
  )
}

export default Home