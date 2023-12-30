import React from 'react'

import 'animate.css';

import Event1 from '../assets/event-1.jpeg'
import Event2 from '../assets/event-2.jpeg'
import Event3 from '../assets/event-3.jpeg'

import { HiCalendar } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";


const Events = () => {
  return (
    <div className='mt-24  animate__animated animate__slideInRight'>
        <div>
            <h3 className=' max-w-[420px] text-center mx-auto '>Our News & Events</h3>
            <p className=' max-w-[420px] text-center mx-auto '>Nec feugiat nisl pretium fusce id velit ut. At tempor commodo ullamcorper Tincidunt dui ornare lectu amet.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1100px] gap-8 mx-auto mt-12 px-8'>
            <div >
                <img className='hover:scale-105 hover:rotate-2 duration-300 ease-in-out h-[420px] object-cover rounded-md' src={Event1} alt="" />
                <div className='flex gap-2 pt-4 pb-2'>
                    <div className="flex gap-1 items-center">
                        <HiCalendar className='text-white' size={20}/>
                        <p className='text-xs'>November 29, 2023</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <IoPersonCircleOutline className='text-white' size={20}/>
                        <p className='text-xs'>by - Grover Abshire</p>
                    </div>
               
         
                </div>
                <h4>Burger Ingredients a Better Flavor</h4>
            </div>
            <div>
                <img className='hover:scale-105 hover:rotate-2 duration-300 ease-in-out h-[420px] object-cover rounded-md' src={Event2} alt="" />
                <div className='flex gap-2 pt-4 pb-2'>
                    <div className="flex gap-1 items-center">
                        <HiCalendar className='text-white' size={20}/>
                        <p className='text-xs'>November 27, 2023</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <IoPersonCircleOutline className='text-white' size={20}/>
                        <p className='text-xs'>by - Justyn Boosco</p>
                    </div>
               
         
                </div>
                <h4>Crispy wings tossed tantalising in buttery goodness</h4>
            </div>
            <div className='pb-12'>
                <img className='hover:scale-105 hover:rotate-2 duration-300 ease-in-out h-[420px] object-cover rounded-md' src={Event3} alt="" />
                <div className='flex gap-2 pt-4 pb-2'>
                    <div className="flex gap-1 items-center">
                        <HiCalendar className='text-white' size={20}/>
                        <p className='text-xs'>November 29, 2023</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <IoPersonCircleOutline className='text-white' size={20}/>
                        <p className='text-xs'>by - Grover Abshire</p>
                    </div>
               
         
                </div>
                <h4>Crispy Chicken</h4>
            </div>
        </div>

    </div>
  )
}

export default Events
