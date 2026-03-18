import React from 'react'

function Contact() {
  return (
    <div>
        
        
            <div class="bg-gray-100 mt-5 px-20 py-8">
            <h2 className='text-2xl text-gray-800 font-bold'>Contact</h2>
            <p className='text-1xl text-gray-600 mt-5'>I would love to hear from you. Whether you have a question about my services, want to discuss a potential project, or simply want to say hello, don't hesitate to get in touch. I am here to help and excited to start a conversation.</p>
            <div class="grid grid-cols-2 gap-4 mt-20">
                <div className='text-1xl text-gray-600'>
                      <div className='my-10 '>
                        megha@example.com
                      </div>
                      <div className='my-10'>
                       9098888880
                      </div>
                      <div className='my-10'>
                        101 main street ,Surat Gujrat India
                      </div>
                </div>
                
                <div>
<div class="isolate bg-white px-6 py-5  lg:px-8">
  <div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
   
  </div>
  <div class="mx-auto">
    <h2 class="text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-2xl">Send me a Message
</h2>
   
  </div>
  <form action="#" method="POST" class="mx-auto max-w-xl ">
    <div class="grid grid-cols-1   sm:grid-cols-1">
      <div>
        <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">First name</label>
        <div class="mt-2.5">
          <input id="first-name" type="text" name="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
        </div>
      </div>
     
      
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
        <div class="mt-2.5">
          <input id="email" type="email" name="email" autocomplete="email" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
        </div>
      </div>
     
      <div class="sm:col-span-2">
        <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
        <div class="mt-2.5">
          <textarea id="message" name="message" rows="4" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"></textarea>
        </div>
      </div>
      
    </div>
    <div class="mt-10">
      <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
    </div>
  </form>
</div>

                </div>
                
                </div>
         </div>
        </div>
   
  )
}

export default Contact