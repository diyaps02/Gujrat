import React from 'react'
import scheme from "../../Assets/Images/schemes.jpg"
import scheme3 from "../../Assets/Images/scheme3.jpg";
import { Carousel } from 'react-responsive-carousel';
import research1 from "../../Assets/Images/research1.jpg"
import research2 from "../../Assets/Images/research2.png"
import research3 from "../../Assets/Images/research3.jpg"
import startup from "../../Assets/Images/startupmodi.png"
import policies from "../../Assets/Images/policies.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Latestnews = () => {

  const option=["All","News","Anouncement"];

  return (
    <div className='h-screen w-full'>
      <div className='text-6xl text-center text-orange-300 font-bold px-12 pt-6 '>
        Latest News
      </div>

      <div className='w-full flex mx-auto px-12 gap-8 h-5/6 pt-6'>
        {/* written news section */}
        <div className='w-5/12  flex justify-center items-center'>
          <div className='flex flex-col rounded-md shadow-lg shadow-grey-700 pb-4 mx-auto w-9/12 h-full '>

            <div className='flex gap-4 bg-blue text-white mx-auto py-4 '>
            {
            option.map((ele,index)=>(
              <button key={index} className='text-xl p-2 px-3 bg-blue-500 text-white rounded-md'>{ele}</button>
            ))
          }
            </div>
            <div className=' flex flex-col gap-2 h-[calc(100%-60px)] overflow-y-auto'>

             <div className='flex gap-4'>
              <i>-</i>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio?<br/>
                Jan 17 ,2025

              </div>
              
             </div>
             <div className='flex gap-4'>
              <i>-</i>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio?<br/>
                Jan 17 ,2025

              </div>
             </div>
            
             <div className='flex gap-4'>
              <i>-</i>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio?<br/>
                Jan 17 ,2025

              </div>
             </div>
             <div className='flex gap-4'>
              <i>-</i>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio?<br/>
                Jan 17 ,2025

              </div>
             </div>
             <div className='flex gap-4'>
              <i>-</i>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio?<br/>
                Jan 17 ,2025

              </div>
             </div>
             <div className='flex gap-4'>
              <i>-</i>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio?<br/>
                Jan 17 ,2025

              </div>
             </div>
             <div className='flex gap-4'>
              <i>-</i>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio?<br/>
                Jan 17 ,2025

              </div>
             </div>
             <div className='flex gap-4'>
              <i>-</i>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio?<br/>
                Jan 17 ,2025

              </div>
             </div>
             <div className='flex gap-4'>
              <i>-</i>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio?<br/>
                Jan 17 ,2025

              </div>
             </div>
             <div className='flex gap-4'>
              <i>-</i>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio?<br/>
                Jan 17 ,2025

              </div>
             </div>

            </div>
          </div>
        </div>
        {/* carausel section */}
        <div className='w-7/12 bg-orange-200 flex items-center pt-4'>
        <Carousel>
            <div>
              <img src={research1} alt="News 2" />
              <p className="legend">Biochemical Research in gujrat</p>
            </div>
            <div>
              <img src={research2} alt="News 3" />
              <p className="legend">Genetic Research in gujrat</p>
            </div>
            <div>
              <img src={research3} alt="News 4" />
              <p className="legend">Microbacterial Research in gujrat</p>
            </div>
          </Carousel>
        </div>
      </div>


    </div>
  )
}

export default Latestnews;
