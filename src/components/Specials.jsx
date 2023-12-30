import React from 'react'

import 'animate.css';

import Special1 from '../assets/special-1.jpeg'
import Special2 from '../assets/special-2.jpeg'
import Special3 from '../assets/special-3.jpeg'


const Specials = () => {
  return (
    <div className='specials bg-[#2A2E3E] rounded-lg w-full max-w-[1218px] mx-auto pt-12'>
        <div className='w-full flex-col'>
            <h3 className='text-center md:text-left max-w-[396px] mx-auto md:mx-4 lg:mb-[-100px] animate__animated animate__slideInLeft'>Yaamy Speciality Fresh burger</h3>

            <div className='flex items-end'>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 w-full animate__animated animate__slideInUp'>
                <div className='border border-gray-500 rounded-lg p-8 m-4 '>
                    <img src={Special1} className='h-32 w-32 rounded-full'/>
                    <h4 className='py-3'>Buffalo Burgers</h4>
                    <p className='max-w-[300px]'>Ornare arcu odio ut sem nulla Faucibus turpi bendum</p>
                    <div className='mt-12 flex items-center'>
                        <div className='min-w-10 min-h-10 bg-[var(--yellow)] rounded-full flex justify-center items-center'>
                            $20
                        </div>
                        <button className=' ml-6 py-3 bg-[var(--red)]  lg:block group hover:bg-[var(--yellow)] duration-300 ease-in-out px-2 rounded-md'><a className='group-hover:text-black'>ORDER ONLINE</a></button> 
                    </div>
                </div>

                <div className='border border-gray-500 rounded-lg p-8 m-4 '>
                    <img src={Special2} className='h-32 w-32 rounded-full'/>
                    <h4 className='py-3'>Knuckle Burger</h4>
                    <p className='max-w-[300px]'>Ornare arcu odio ut sem nulla Faucibus turpi bendum</p>
                    <div className='mt-12 flex items-center'>
                        <div className='min-w-10 min-h-10 bg-[var(--yellow)] rounded-full flex justify-center items-center'>
                            $15
                        </div>
                        <button className=' ml-6 py-3 bg-[var(--red)]  lg:block group hover:bg-[var(--yellow)] duration-300 ease-in-out px-2 rounded-md'><a className='group-hover:text-black'>ORDER ONLINE</a></button> 
                    </div>
                </div>

                <div className='border border-gray-500 rounded-lg p-8 m-4 '>
                    <img src={Special3} className='h-32 w-32 rounded-full'/>
                    <h4 className='py-3'>Bean burger</h4>
                    <p className='max-w-[300px]'>Ornare arcu odio ut sem nulla Faucibus turpi bendum</p>
                    <div className='mt-12 flex items-center'>
                        <div className='min-w-10 min-h-10 bg-[var(--yellow)] rounded-full flex justify-center items-center'>
                            $20
                        </div>
                        <button className=' ml-6 py-3 bg-[var(--red)]  lg:block group hover:bg-[var(--yellow)] duration-300 ease-in-out px-2 rounded-md'><a className='group-hover:text-black'>ORDER ONLINE</a></button> 
                    </div>
                </div>
            </div>
                <div className='buytwo min-w-[300px] h-[540px] mb-4 hidden lg:block mr-4 rounded-lg p-12 animate__animated animate__slideInRight'>
                    <div className='flex justify-between'>
                        <div className=''>
                            <h4>Buy 2</h4>
                            <h4>Get 1 Free</h4>
                        </div>
                        <div className='w-14 h-14 rotate-12 bg-[var(--yellow)] rounded-full flex justify-center items-center'>
                                $40
                        </div>
                    </div>
                    <p className='mt-4'>Hotline</p>
                    <p className='text-white'>+(456) 346 425 58</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Specials
