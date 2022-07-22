import React from 'react'
import Banner from './Banner'
import Pricing from './Pricing'
import Service from './Service'
import Testimonial from './Testimonial'

function Main() {
  return (
    <div className='w-full h-auto'>
        {/* banner */}
        <Banner/>
        {/* service */}
        <Service/>
        {/* pricing */}
        <Pricing/>
        {/* testimonials */}
        <Testimonial/>
    </div>
  )
}

export default Main