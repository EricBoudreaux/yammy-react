import React from 'react'
import 'animate.css';

import Burger from '../assets/burger.png'
import Doodad1 from '../assets/doodad-1.png'
import Doodad2 from '../assets/doodad-2.png'
import Doodad3 from '../assets/doodad-3.png'
import Doodad4 from '../assets/doodad-4.png'

import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <div className='h-screen w-full pt-4 hero'>
      <div>
      <h1 className='text-center  z-50'>WELCOME TO</h1>
      </div>
      <div className='flex w-full justify-center gap-12 mt-20 lg:mt-8 relative'>
        <h1 className='text-[80px] sm:text-[150px] z-50 md:pt-2'>Y</h1>
        <h1 className='text-[80px] sm:text-[150px] z-50 md:pt-12'>A</h1>
        <h1 className='text-[80px] sm:text-[150px] z-50 md:pt-24'>A</h1>
        <h1 className='text-[80px] sm:text-[150px] z-50 md:pt-12'>M</h1>
        <h1 className='text-[80px] sm:text-[150px] z-50 md:pt-2'>Y</h1>
        <div className='absolute bottom-0 lg:bottom-12 mx-auto z-10'>
            <img className='' src={Burger}  />
        </div>
      </div>


          <img className='hidden lg:block absolute left-8 bottom-0' src={Doodad1} alt="" />
          <img className='hidden lg:block absolute left-60 bottom-80' src={Doodad2} alt="" />
          <img className='hidden lg:block absolute right-12 bottom-64' src={Doodad3} alt="" />
          <img className='hidden lg:block absolute right-60 bottom-44' src={Doodad4} alt="" />

          <IoIosArrowDown size={50} className=' text-[var(--yellow)] mx-auto animate-bounce'/>
    </div>
  )
}

export default Hero
