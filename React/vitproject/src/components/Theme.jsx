import React, { useState } from 'react'

function Theme() {
    const [theme,setTheme]=useState("light");

  return (
    <div style={{
        padding:"50px",
        backgroundColor:theme=='light'?'white':'black',
        color:theme=="light"?'black':'white'
    }}>Theme  
    
     <button onClick={()=>{
        console.log(theme);
        
        setTheme(theme=="light"?'dark':"light")
     }}>{theme=='light'?'dark':'light'}</button>
     </div>
  )
}

export default Theme