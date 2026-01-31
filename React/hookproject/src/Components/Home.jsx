import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Home() {
    const {theme,setTheme} = useContext(ThemeContext)
  return (
    <div>
        <nav>
            <h2 style={{textAlign:"center", color: theme=='light'?'black':'white',
                background:theme=='light'?'white':'black'}}>Navbar</h2>
        </nav>
    </div>
  )
}

export default Home