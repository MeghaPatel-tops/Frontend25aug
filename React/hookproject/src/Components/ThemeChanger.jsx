import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function ThemeChanger() {
    const {theme,setTheme}=useContext(ThemeContext)

    const changeTheme = ()=>{
        setTheme(
            theme=='light'?'dark':'light'
        )
    }
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <button onClick={changeTheme}>
            {
                theme=="light"?'Drak':'Light'
            }
        </button>
    </div>
  )
}

export default ThemeChanger