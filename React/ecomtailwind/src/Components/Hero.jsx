import React from 'react'

function Hero() {
  return (
    <div>
        
        <div className="h-96 bg-[url(https://themewagon.github.io/Coffo/images/banner-bg.png)]  bg-cover bg-center flex items-center" style={{height:"500px"}}>
            
           
            <div class="container mx-auto px-4 ">
                <h1 class="text-white text-5xl">COFFEE <br />Shop</h1>
                <p className='text-white mt-6 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button className='bg-red-500 mt-5 text-white p-2'>ABOUT US</button>
            </div>
            
        </div>
    </div>
  )
}

export default Hero