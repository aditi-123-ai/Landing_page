import React from 'react';
import logo from '../image/logo.png';
import banner from '../image/banner.png';

function Banner() {
  return (
    <div className='w-full h-[100vh] bg-gradient-to-br from-[#5118A5] via-[#6427BD] to-[#8242DF] '>
      <div className='justify-center flex'>
        <div className='w-4/5 h-32 flex justify-between items-center'>
              <img className='w-52 h-24 ml-10	' src={logo} alt="" />
              <div className='w-2/3 flex justify-around items-center'>
              <div className='w-2/3 '>
                  <ul className='flex justify-between text-white text-lg'>
                      <li className='hover:underline hover:text-[#43B5EE] cursor-pointer'>Home</li>
                      <li className='hover:underline hover:text-[#43B5EE] cursor-pointer'>Service</li>
                      <li className='hover:underline hover:text-[#43B5EE] cursor-pointer'>Pricing</li>
                      <li className='hover:underline hover:text-[#43B5EE] cursor-pointer'>Testimonials</li>
                      <li className='hover:underline hover:text-[#43B5EE] cursor-pointer'>Blog</li>
                      
                  </ul>
              </div>
              <button className='w-36 p-4 mr-4 bg-[#43B5EE] rounded-md text-white text-lg font-medium'>FREE TRIAL</button>
              </div>
          </div>
      </div>
        {/* header */}
        <div className='w-full h-4/5 flex justify-center items-center mt-7'>
          <div className='w-4/5 h-full flex'>
            <div className='w-1/2 h-full text-white flex flex-col items-start justify-center p-12'>
              <h1 className='text-6xl mr-8 leading-tight font-semibold'>Codext one of the best system in SAAS.</h1>
              <p className='text-base mr-32 mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolore voluptatem perferendis dolor, assumenda in ipsam</p>
              <button className='mt-10 bg-[#43B5EE] p-5 rounded-md text-lg font-semibold cursor-pointer'>Try A Live Demo</button>
            </div>
            <div className='w-1/2 h-full'>
              <img className='w-full h-full' src={banner} alt="banner" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Banner