import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Todos() {
    const [todos,setTodos]=useState([]);
    const getTodos=async()=>{
        try {
            let result = await axios.get('https://jsonplaceholder.typicode.com/todos');
            let todoArray = result.data;
            console.log(todoArray);
            setTodos(todoArray)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getTodos();
    },[])
  return (
    <div>
        <h1>Todos List</h1>
        <ul>
            {
                todos.map((index,i)=>(
                    <li key={i}>{index.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Todos