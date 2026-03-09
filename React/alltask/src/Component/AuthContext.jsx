import { createContext, useState } from "react";

export const AuthContext = createContext(0);

export const loggedUser = createContext(()=>{
      if(localStorage.getItem('session-user')){
           return JSON.parse(localStorage.getItem('session-user'));
      }
      else{
           return null;
      }
})



export const AuthProvider = ({children})=>{
    const [flag,setFlag]=useState(0)

    return(
        <AuthContext.Provider value={{flag,setFlag}}>
            {
                children
            }
        </AuthContext.Provider>
    )
}