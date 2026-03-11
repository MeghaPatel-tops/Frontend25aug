import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './Redux/Authcheck';
import { useNavigate } from 'react-router-dom';

function Login() {
    const dispatch=useDispatch();
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>{
            dispatch(login())
            setTimeout(()=>{
                navigate('/home')
            },1000)
        }}>Login</button>
    </div>
  )
}

export default Login