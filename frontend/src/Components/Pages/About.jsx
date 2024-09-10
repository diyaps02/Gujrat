import React from 'react'
import aboutus from "../../Assets/Images/aboutusimage.jpg";
const About = ({position,heading,subheading,codeblock,bg,codecolor}) => {
  return (
    <div className='h-screen w-full bg-white'>
        <div className='mx-auto w-10/12 h-4/6 mt-20 shadow-lg flex shadow-grey-300 rounded-md '>
         <div className='w-[50%] p-10 flex flex-col gap-4'>
         <h1 className='text-green-800 text-6xl font-bold '>About us</h1> 
          <div className=''>
          Gujarat is a leader in innovation and entrepreneurship, but its current systems for managing research, intellectual property rights (IPR), and start-up growth are inefficient and fragmented. Information is scattered across various departments, making it difficult to access and manage resources effectively.
          </div>
          <div className=''>
          To address this, we propose a comprehensive web application that centralizes these functions. This platform will streamline data management, enhance transparency, improve resource allocation, and provide support for innovators and start-ups. The goal is to create a more efficient and supportive environment, accelerating innovation and contributing to Gujarat's economic growth.
          </div>
         </div>
         <div className='w-[50%] object-fit flex items-center px-16 '>
        <img src={aboutus} className='shadow-lg shadow-grey-700 rounded-lg'/>
         </div>
        </div>
    </div>
  )
}

export default About
