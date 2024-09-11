import React from 'react'
import { BsBuildingsFill } from "react-icons/bs";
import startup from "../../Assets/Images/startupmodi.png"
import policies from "../../Assets/Images/policies.png"
import Footer from "../common/Footer";
import Aboutus from "../Pages/About";
import Latestnews from "../../Components/Pages/Latestnews";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import About from '../Pages/About';
const Homepage = () => {
  return (
   <div>

    {/* homepage start */}
     <div className='bg-homepage  w-full bg-cover pt-11  h-screen'>
   <div className='flex flex-col justify-center '>
    <div className='bg-blue-500 rounded-md h-80 w-6/12 opacity-85 mt-16 ml-16'>
    <Carousel showThumbs={false} showIndicators={false}  autoPlay={true} interval={3000} infiniteLoop={true}showStatus={false} stopOnHover={true} >
            <div className=''>
              <img src={startup} alt="News 2" />
            </div>
            <div>
              <img src={policies} alt="News 3" />
            </div>
            <div>
              <img src={startup} alt="News 4" />
            </div>
          </Carousel>
    </div>
  <div className='flex justify-center'>
  <div className='bg-black mt-16 w-8/12 h-40 opacity-75 flex gap-10 px-16 rounded-md shadow-black shadow-md text-white p-2'>
        <div className='flex items-center gap-4'>
        <BsBuildingsFill  className='text-4xl'/>
       <div className='flex flex-col'>
       <h1 className='text-4xl font-bold'>12900+</h1>
       <h1 className='font-bold'>STARTUPS</h1>
       </div>
        </div>
        <div className='flex items-center gap-4'>
        <BsBuildingsFill  className='text-4xl'/>
      <div className='flex flex-col'>
      <h1  className='text-4xl font-bold'>300+</h1>
      <h1 className='font-bold'>RESEARCHERS</h1>
      </div>
        </div>
        <div className='flex items-center gap-4'>
        <BsBuildingsFill  className='text-4xl'/>
      <div className='flex flex-col'>
      <h1  className='text-4xl font-bold'>50,100+</h1>
      <h1 className='font-bold'>RESOURCES</h1>
      </div>
        </div>
        <div className='flex items-center gap-4'>
        <BsBuildingsFill  className='text-4xl'/>
       <div className='flex flex-col'>
       <h1  className='text-4xl font-bold'>1000+</h1>
       <h1 className='font-bold'>PATENTS</h1>
       </div>
        </div>
    </div>
  </div>
   </div>
    </div>
    {/* homepage end */}
    <About/>
    <Latestnews/>
    <Footer/>
   </div>
  )
}

export default Homepage;
