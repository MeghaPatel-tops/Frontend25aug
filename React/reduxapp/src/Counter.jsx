import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/Counter'

function Counter() {
      const dispatch = useDispatch();
  const [count, setCount] = useState(0)
const {value}=  useSelector((state)=>state.counter)

const {isloggedin} = useSelector((state)=>state.auth)
  return (
    <div>
          <button onClick={()=>{
        dispatch(increment())
      }}>+</button>
      {value}
      <button onClick={()=>{
        dispatch(decrement())
      }}>-</button>
    </div>
  )
}

export default Counter