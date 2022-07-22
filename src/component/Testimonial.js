import React from 'react';
import { ChatIcon, CameraIcon, LinkIcon } from '@heroicons/react/solid';
import avatar from '../image/avtar.png'
import group1 from '../image/group1.jpeg';
import group2 from '../image/group2.jpeg';
import logo from '../image/logo.png';


function Testimonial() {
  return (
    <div className='w-full h-[100vh]'>
        <h1 className='text-5xl font-medium text-center'>Choose your best pricing plan</h1>
        <p className='text-slate-700 text-center mt-5 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta error quidem vero<br />  voluptatibus atque omnis sint accusantium nisi </p>
        <div className='w-full h-[100vh] flex justify-center flex-col '>
        <div className='w-full h-full flex justify-center'>
            <div className='w-[1300px] h-[500px] mt-24 flex justify-center'>
                <div className='w-80 h-72 shadow-2xl shadow-indigo-500 rounded-lg '>
                    <div className='w-full h-full flex items-center flex-col'>
                        <div className='flex  p-2 mt-10'>
                            <h1 className='text-5xl text-slate-300'>"</h1>
                            <p className=''>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Perspis <br /> asperiores ipsam rem alias...</p>
                        </div>
                        <div className='flex items-center mt-10'>
                            <div>
                                <img className='w-20 h-20 mr-5' src={avatar} alt="" />
                            </div>
                            <div>
                                <h1>Ryan Press</h1>
                                <p>Marketing manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-80 h-72 shadow-lg rounded-lg '>
                    <div className='w-full h-full flex items-center flex-col'>
                        <div className='flex  p-2 mt-10'>
                            <h1 className='text-5xl text-slate-300'>"</h1>
                            <p className=''>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Perspis <br /> asperiores ipsam rem alias...</p>
                        </div>
                        <div className='flex items-center mt-10'>
                            <div>
                                <img className='w-20 h-20 mr-5' src={avatar} alt="" />
                            </div>
                            <div>
                                <h1>Ryan Press</h1>
                                <p>Marketing manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-80 h-72 shadow-lg rounded-lg '>
                    <div className='w-full h-full flex items-center flex-col'>
                        <div className='flex  p-2 mt-10'>
                            <h1 className='text-5xl text-slate-300'>"</h1>
                            <p className=''>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Perspis <br /> asperiores ipsam rem alias...</p>
                        </div>
                        <div className='flex items-center mt-10'>
                            <div>
                                <img className='w-20 h-20 mr-5' src={avatar} alt="" />
                            </div>
                            <div>
                                <h1>Ryan Press</h1>
                                <p>Marketing manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <h1 className='text-5xl font-medium text-center'>Lastest insights news</h1>
        <div className='w-full h-[100vh] flex justify-center flex-col '>
            <div className='w-full h-full flex justify-center'>
                <div className='w-full h-[580px] mt-24 flex justify-center '>
                    <div className='w-[500px] h-full rounded-lg border-2 border-slate-800 mr-10 '>
                        <div className='w-full h-full flex items-center flex-col'>
                            <div className='flex flex-col rounded-lg'>
                                <img className='rounded-lg h-80' src={group1} alt="" />
                            </div>
                            <div className='w-full flex flex-col items-center mt-3'>
                                <div className='w-full flex justify-around text-slate-700'>
                                    <p>Our Creative Team</p>
                                    <p>17 June, 2021</p>
                                    <p>by Stive Smithi</p>
                                </div>
                                <div className='p-5 ml-6'>
                                    <h1 className='text-2xl font-semibold mb-4'>Running remote offsite and onbordings</h1>
                                    <p className='text-slate-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, quidem. Lorem ipsum dolor, sit optio.</p>
                                    <button className=' pl-4 pr-4 pt-2 pb-2 bg-[#43B5EE] rounded-lg mt-5 text-white'>Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[500px] h-full rounded-lg border-2 border-slate-800 ml-10 '>
                        <div className='w-full h-full flex items-center flex-col'>
                            <div className='flex flex-col rounded-lg'>
                                <img className='rounded-lg h-80' src={group2} alt="" />
                            </div>
                            <div className='w-full flex flex-col items-center mt-3'>
                                <div className='w-full flex justify-around'>
                                    <p>Our Creative Team</p>
                                    <p>17 June, 2021</p>
                                    <p>by Stive Smithi</p>
                                </div>
                                <div className='p-5 ml-6'>
                                    <h1 className='text-2xl font-semibold mb-4'>Running remote offsite and onbordings</h1>
                                    <p className='text-slate-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, quidem. Lorem ipsum dolor, sit optio.</p>
                                    <button className=' pl-4 pr-4 pt-2 pb-2 bg-[#43B5EE] rounded-lg mt-5 text-white'>Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-[500px] flex flex-col items-center justify-center bg-[#051114]'>
            <div className='w-[1100px] h-full flex items-center justify-start'>
                <div className='w-64 flex flex-col'>
                    <img className='w-40 h-24' src={logo} alt="" />
                    <p className='mt-5 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, iure modi. Delectus dolorem non voluptates aspernatur </p>
                    <div className='flex mt-5'>
                        <div className='w-10 h-10 ml-2 flex justify-center items-center rounded-full border-2 border-slate-300'><ChatIcon className='w-4 h-4 text-slate-300'/></div>
                        <div className='w-10 h-10 ml-2 flex justify-center items-center rounded-full border-2 border-slate-300'><ChatIcon className='w-4 h-4 text-slate-300'/></div>
                        <div className='w-10 h-10 ml-2 flex justify-center items-center rounded-full border-2 border-slate-300'><CameraIcon className='w-4 h-4 text-slate-300'/></div>
                        <div className='w-10 h-10 ml-2 flex justify-center items-center rounded-full border-2 border-slate-300'><LinkIcon className='w-4 h-4 text-slate-300'/></div>
                    </div>
                </div>
                <div className='text-white ml-32'>
                    <h1 className='text-2xl font-semibold mb-10'>Resoures</h1>
                    <p className='mb-3 cursor-pointer'>service</p>
                    <p className='mb-3 cursor-pointer'>Pricing</p>
                    <p className='mb-3 cursor-pointer'>Testimonials</p>
                    <p className='mb-3 cursor-pointer'>Blog</p>
                </div>
                <div className='text-white ml-32'>
                    <h1 className='text-2xl font-semibold mb-10'>Useful links</h1>
                    <p className='mb-3 cursor-pointer'>Terms of Services</p>
                    <p className='mb-3 cursor-pointer'>Privacy Policy</p>
                    <p className='mb-3 cursor-pointer'>Cookie Policy</p>
                    <p className='mb-3 cursor-pointer'>Contact us</p>
                </div>
                <div className='text-white ml-32'>
                    <h1 className='text-2xl font-semibold mb-6'>Newletter</h1>
                    <p className='mb-3 cursor-pointer text-sm text-slate-300'>Sign up and receive the lastest <br />news via email.</p>
                    <div className='border-2 border-slate-400 rounded-lg'>
                        <input className='w-40 p-2 bg-transparent text-white placeholder:text-slate-400' type="text" placeholder='Email address' />
                        <button className='p-2 rounded-lg cursor-pointer bg-[#43B5EE]'>Send</button>
                    </div>
                </div>
                
            </div>
            <div className='w-[1100px] h-1 bg-slate-500'>
            </div>
            <h1 className='text-white font-semibold text-lg mt-5 mb-3'>Copyright 2021 The Codext All Right Reserved.</h1>

        </div>
    </div>
  )
}

export default Testimonial