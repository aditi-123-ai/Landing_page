import React from 'react';
import service from '../image/service.png';
import { ArrowRightIcon, TerminalIcon, PresentationChartLineIcon, LockClosedIcon, MailIcon} from '@heroicons/react/solid'

function Service() {
  return (
    <>
    <div className='w-full h-[100vh] flex'>
        <div className='w-1/2 h-full'>
            <img className='w-full h-full' src={service} alt="" />
        </div>
        <div className='w-1/2 h-full flex flex-col justify-center ml-40'>
            <h1 className='text-5xl mb-10 font-semibold'>It's helpful for operating <br /> system</h1>
            <div className='w-96 flex mb-5'>
                <div className='mt-1 mr-4'>
                    <ArrowRightIcon className="h-5 w-5 text-orange-600"/>
                </div>
                <div>
                    <div className=''>
                        <h1 className='text-2xl mb-4'>Ultra fast & Secure</h1>
                        <p className='text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae repellendus adipiscing</p>
                    </div>
                </div>
            </div>
            <div className='w-96 flex mb-5'>
                <div className='mt-1 mr-4'>
                    <ArrowRightIcon className="h-5 w-5 text-green-500"/>
                </div>
                <div>
                    <div className=''>
                        <h1 className='text-2xl mb-4'>Allows customization</h1>
                        <p className='text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae repellendus adipiscing</p>
                    </div>
                </div>
            </div>
            <div className='w-96 flex'>
                <div className='mt-1 mr-4'>
                    <ArrowRightIcon className="h-5 w-5 text-blue-500"/>
                </div>
                <div>
                    <div className=''>
                        <h1 className='text-2xl mb-4'>Smart contract</h1>
                        <p className='text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae repellendus adipiscing</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='w-full h-[100vh] flex justify-center flex-col '>
        <h1 className='text-5xl font-medium text-center mt-24'>We Provides best Feature <br />for customar</h1>
        <div className='w-full h-full flex justify-center'>
            <div className='w-[1000px] h-96 mt-24 flex'>
                <div className='w-64 h-full  shadow-2xl rounded-lg'>
                    <div className='w-full h-full flex justify-center items-center flex-col'>
                        <div className='w-full h-full hover:bg-indigo-700 flex justify-center items-center'>
                            <div className='w-36 h-36 bg-[#F9E9E9] rounded-full flex justify-center items-center '>
                                <TerminalIcon className='h-20 w-20 text-[#9D1918]'/>
                            </div>
                        </div>
                        
                        <div className='flex justify-center items-center flex-col'>
                            <h1 className='text-2xl mt-5 font-medium'>Clean Code</h1>
                            <p className='text-center mt-5'>Lorem ipsum dolor sit amet,<br /> consectetur adipi</p>
                            <button className='w-10 h-10 rounded-full  flex justify-center items-center border-2 border-blue-300 mt-4 mb-2'><ArrowRightIcon className='w-5 h-5 text-blue-300 '/></button>
                        </div>
                    </div>
                </div>
                <div className='w-64 h-full shadow-2xl rounded-lg ml-10'>
                <div className='w-full h-full flex justify-center items-center flex-col'>
                    <div className='w-full h-full hover:bg-indigo-700 flex justify-center items-center'>
                        <div className='w-36 h-36 bg-[#F8F1E7] rounded-full flex justify-center items-center'>
                            <PresentationChartLineIcon className='h-20 w-20 text-[#9A5D28]'/>
                        </div>
                    </div>
                        <div className='flex justify-center items-center flex-col'>
                            <h1 className='text-2xl mt-5 font-medium'>Data Analytic</h1>
                            <p className='text-center mt-5'>Lorem ipsum dolor sit amet,<br /> consectetur adipi</p>
                            <button className='w-10 h-10 rounded-full  flex justify-center items-center border-2 border-blue-300 mt-4 mb-2'><ArrowRightIcon className='w-5 h-5 text-blue-300 '/></button>
                        </div>
                    </div>
                </div>
                <div className='w-64 h-full shadow-2xl rounded-lg ml-10'>
                <div className='w-full h-full flex justify-center items-center flex-col'>
                    <div className='w-full h-full hover:bg-indigo-700 flex justify-center items-center'>
                        <div className='w-36 h-36 bg-[#E7F6F6] rounded-full flex justify-center items-center'>
                            <LockClosedIcon className='h-20 w-20 text-[#539AA3]'/>
                        </div>
                    </div>
                        <div className='flex justify-center items-center flex-col'>
                            <h1 className='text-2xl mt-5 font-medium'>Fully Secured</h1>
                            <p className='text-center mt-5'>Lorem ipsum dolor sit amet,<br /> consectetur adipi</p>
                            <button className='w-10 h-10 rounded-full  flex justify-center items-center border-2 border-blue-300 mt-4 mb-2'><ArrowRightIcon className='w-5 h-5 text-blue-300 '/></button>
                        </div>
                    </div>
                </div>
                <div className='w-64 h-full shadow-2xl rounded-lg ml-10'>
                <div className='w-full h-full flex justify-center items-center flex-col'>
                    <div className='w-full h-full hover:bg-indigo-700 flex justify-center items-center'>
                        <div className='w-36 h-36 bg-[#F4E7F7] rounded-full flex justify-center items-center'>
                            <MailIcon className='h-20 w-20 text-[#C734CC]'/>
                        </div>
                    </div>
                        <div className='flex justify-center items-center flex-col'>
                            <h1 className='text-2xl mt-5 font-medium'>24/7 Support</h1>
                            <p className='text-center mt-5'>Lorem ipsum dolor sit amet,<br /> consectetur adipi</p>
                            <button className='w-10 h-10 rounded-full  flex justify-center items-center border-2 border-blue-300 mt-4 mb-2'><ArrowRightIcon className='w-5 h-5 text-blue-300 '/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service