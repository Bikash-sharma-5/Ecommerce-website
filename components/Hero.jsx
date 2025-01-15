import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='flex overflow-hidden w-screen  flex-col sm:flex-row border bg-[#FFFAF0]'>

            {/* Hero Left Side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                      
                        <p className='font-Fashionable text-[black] text-lg md:text-base'>EVERYDAY</p>
                    </div>

                    <h1 className='prata-regular text-3xl text-[black]  sm:py-3 lg:text-5xl leading-relaxed'>FASHION</h1>

                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-lg md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>

            {/* Hero Right Side */}
            <img className='w-full sm:w-1/2' src={assets.three} alt="" />
        </div>
    )
}

export default Hero
