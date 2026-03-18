import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div id="navbar"  className='sticky top-0'>
        <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div class="flex">
           <div class="w-20 flex-none ...">
              <a href="#hero">Home</a>
              
            </div>
            <div class="w-20 flex-none ...">
              <a href="#about">About</a>
              
            </div>
            <div class="w-20 flex-1 ...">
                 <a href="#work">Work</a>
            </div>
            <div class="w-20 flex-1 ...">
                 <a href="#project">Project</a>
            </div>
            </div>
  <div>
   
  </div>
</div>
    </div>
  )
}

export default Navbar