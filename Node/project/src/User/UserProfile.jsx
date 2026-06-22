import axios from 'axios';
import { log } from 'firebase/firestore/pipelines';
import React, { useEffect } from 'react'

function UserProfile() {

    const checkAuth = async () => {
        try {
            let UserLogged = JSON.parse(localStorage.getItem('loggedUesr'));
           
            let res = await axios.get('http://localhost:3000/profile', {
                headers: {
                    Authorization: `Bearer ${UserLogged.token}`
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