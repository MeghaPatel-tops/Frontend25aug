import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Footer() {
  const {theme,setTheme}=useContext(ThemeContext)
  return (
    <div>
        <div className="footer">
            <h2 style={{textAlign:"center", color: theme=='light'?'black':'white',
                background:theme=='light'?'white':'black'}}>Footer</h2>
        </div>

    </div>
  )
}

export default Footer