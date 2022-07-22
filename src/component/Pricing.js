import React from 'react'
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon} from '@heroicons/react/solid'


function Pricing() {
  return (
    <div className='w-full h-[100vh]'>
        <h1 className='text-5xl font-medium text-center'>Let's see our User's Review</h1>
        <div className='w-full flex justify-center mt-10'>
            <h1 className='font-medium text-2xl'>Added for Monthy</h1>
            <div className='w-20 h-8 bg-[#D7EFFC] ml-5 mr-5 rounded-full border-2 border-[#43B5EE] flex items-center '>
                <div className='w-10 h-6 rounded-full ml-1 bg-[#43B5EE]'></div>
            </div>
            <h1 className='text-2xl'>Yearly</h1>
        </div>
        <div className='w-full h-[100vh] flex justify-center flex-col '>
        <div className='w-full h-full flex justify-center'>
            <div className='w-[1300px] h-[500px] mt-24 flex justify-center'>
                <div className='w-80 h-full shadow-2xl rounded-lg '>
                    <div className='w-full h-full flex items-center flex-col'>
                        <div className='flex flex-col justify-center items-center mt-10'>
                            <h1 className='text-3xl	'>Start-up</h1>
                            <div className='flex justify-center items-center mt-3'>
                                <ArrowNarrowLeftIcon className='w-10'/>
                                <ArrowNarrowRightIcon className='w-10'/>
                            </div>
                            <h1 className='text-5xl'>$10/mo</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col mt-10'>
                            <p className='text-slate-700 mb-3'>Easy Customizable</p>
                            <p className='text-slate-700 mb-3'>Commercia license</p>
                            <p className='text-slate-700 mb-3'>Singal user license</p>
                            <p className='text-slate-700 mb-3'>Hotline support 24/7</p>
                            <button className='w-52 h-12 flex justify-center items-center mt-3 bg-[#ECF7FD] text-[#53BBF0] text-base'>TRY THIS PACKAGE</button>
                        </div>
                    </div>
                </div>
                <div className='w-80 h-full shadow-2xl rounded-lg ml-10 '>
                    <div className='w-full h-full flex items-center flex-col'>
                        <div className='flex flex-col justify-center items-center mt-10'>
                            <h1 className='text-3xl	'>Classic</h1>
                            <div className='flex justify-center items-center mt-3'>
                                <ArrowNarrowLeftIcon className='w-10'/>
                                <ArrowNarrowRightIcon className='w-10'/>
                            </div>
                            <h1 className='text-5xl'>$30/mo</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col mt-10'>
                            <p className='text-slate-700 mb-3'>Easy Customizable</p>
                            <p className='text-slate-700 mb-3'>Commercia license</p>
                            <p className='text-slate-700 mb-3'>5 user license</p>
                            <p className='text-slate-700 mb-3'>Hotline support 24/7</p>
                            <button className='w-52 h-12 flex justify-center items-center mt-3 bg-[#ECF7FD] text-[#53BBF0] text-base'>TRY THIS PACKAGE</button>
                        </div>
                    </div>
                </div>
                <div className='w-80 h-full shadow-2xl rounded-lg ml-10'>
                <div className='w-full h-full flex items-center flex-col'>
                        <div className='flex flex-col justify-center items-center mt-10'>
                            <h1 className='text-3xl	'>Premium</h1>
                            <div className='flex justify-center items-center mt-3'>
                                <ArrowNarrowLeftIcon className='w-10'/>
                                <ArrowNarrowRightIcon className='w-10'/>
                            </div>
                            <h1 className='text-5xl'>$49/mo</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col mt-10'>
                            <p className='text-slate-700 mb-3'>Easy Customizable</p>
                            <p className='text-slate-700 mb-3'>Commercia license</p>
                            <p className='text-slate-700 mb-3'>10 user license</p>
                            <p className='text-slate-700 mb-3'>Hotline support 24/7</p>
                            <button className='w-52 h-12 flex justify-center items-center mt-3 bg-[#ECF7FD] text-[#53BBF0] text-base'>TRY THIS PACKAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Pricing