import React from 'react'

function About() {
const skill = ['Html','css','js','react','mongodb','node','express','php']
  return (
    <div id="about">
         <div class="bg-gray-100 mt-5 px-20 py-8">
            <h2 className='text-2xl text-gray-800 font-bold'>About</h2>
            <p className='mt-2'>
                I am a passionate full-stack software developer with a deep-rooted love for crafting digital solutions that empower and inspire. My journey into the world of software development began with a solid foundation in computer science, which I acquired during my years of dedicated study at Ramrao Adik Institute of Technology, where I earned my Bachleor's in Computer Science degree.
            </p>
            <p className='mt-2'>My educational journey provided me with a strong theoretical understanding, but it's my insatiable curiosity and relentless drive that have fueled my practical expertise. I thrive in the dynamic and ever-evolving tech landscape, constantly updating my skills to stay at the forefront of innovation. As a full-stack developer, I find joy in bringing ideas to life, from conceptualization to deployment. I revel in the challenge of seamlessly connecting the front-end user experience with the robust functionality of the back end. Whether I'm coding in Python, JavaScript, or diving into the intricacies of databases, I approach each project with enthusiasm and precision.</p>
          {
            skill.map((index,i)=>(
                  <button className='px-2 py-1 m-2 border-1 border-black text-dark mt-3 rounded-xl'>
                    {index}
            </button>
            ))
          }



         </div>
    </div>
  )
}

export default About