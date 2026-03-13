import React from 'react'

function Hero() {
  return (
    <div id="hero">
        <div class="bg-gray-100 mt-5 px-20 py-8">
        
        <div class="grid grid-cols-2 gap-4">
            <div>
                <h1 className='text-4xl font-bold'>Hey there, I'm Megha Patel!</h1>
                <h2 className='text-2xl mt-3'>A Full Stack Deeloper and Designer based in India</h2>
                <p className='mt-3'>Full-stack developer with a passion for turning code into seamless user experiences!</p>
                <button className='p-2 bg-blue-400 text-white mt-3 rounded-xl'>
                    Contact Me
                </button>
            </div>
           
            <div className='mx-auto'>
                <img src="https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-260nw-2438031869.jpg" alt="" className='rounded-full h-70 w-70' />
            </div>
            </div>
        </div>    
    </div>
  )
}

export default Hero