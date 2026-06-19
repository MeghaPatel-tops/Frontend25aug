import axios from 'axios';
import { log } from 'firebase/firestore/pipelines';
import React, { useEffect } from 'react'

function UserProfile() {

    const checkAuth = async () => {
        try {
            let token = localStorage.getItem('token');
            console.log(token);
            

            let res = await axios.get('http://localhost:3000/profile', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
         checkAuth()
    },[])
    return (
        <div>UserProfile</div>
    )
}

export default UserProfile