import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Hero() {
    const {theme,setTheme} = useContext(ThemeContext);
  return (
    <div>
        <div className="hero" style={{height:"500px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",
            border:theme=='light'?'10px solid black':'10px solid gray',
            background:theme=='light'?'white':'black'
            }}>
            <h2  style={{
                color: theme=='light'?'black':'white',
                
            }}>Welcome To Tops Technolgy

                <br />
                {theme}
            </h2>
        </div>

    </div>
  )
}

export default Hero