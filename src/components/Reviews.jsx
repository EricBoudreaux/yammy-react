import React from 'react'

import 'animate.css';

import ReviewPic from '../assets/review.png'

import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center max-w-[400px] md:max-w-[1300px] mx-auto my-20 animate__animated animate__slideInUp'>
        <div className='leading-[80px] text-center md:text-left my-auto z-50'>
            <p className='text-lg'>Customer reviews</p>
            <h1 className=''>125+</h1>
        </div>
        <div className='bg-[var(--yellow)] max-w-[523px] h-[400px] scale-75 mx-[-80px]'>
            <img src={ReviewPic} className='scale-125 z-0' alt="" />
        </div>
        <div className='max-w-[420px] h-[200px] bg-[#2A2E3E] p-4 z-50 md:mt-52'>
            <div className='text-[var(--yellow)] flex gap-1'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
            <div className=''>
                <p className='text-lg my-6'>Nec feugiat nisl pretium fusce id velit ut. At tempor commodo ullamcorper tincidunt dui ut ornare lectus sit amet Ac turpis egestas a lacus.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
