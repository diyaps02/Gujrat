import React from 'react'

const Latestnews = () => {

  const option=["All","News","Anouncement","Reports"];

  return (
    <div className='h-screen w-full'>
      <div className='text-6xl text-center text-orange-300 font-bold px-12 pt-6 '>
        Latest News
      </div>

      <div className='w-full flex mx-auto px-12 gap-8 h-5/6 pt-6'>
        {/* written news section */}
        <div className='w-5/12  flex justify-center items-center'>
          <div className='flex flex-col rounded-md shadow-lg shadow-grey-700 pb-4 mx-auto w-9/12 '>
            <div className='flex gap-2 bg-blue text-white mx-auto py-4'>
            {
            option.map((ele,index)=>(
              <button key={index} className='text-xl p-2 px-3 bg-blue-500 text-white rounded-md'>{ele}</button>
            ))
          }
            </div>
            <div className='h-[100%] flex flex-col gap-2'>

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
        <div className='w-7/12 bg-orange-200'>
hello
        </div>
      </div>


    </div>
  )
}

export default Latestnews;
