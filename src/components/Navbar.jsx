import React from 'react'

import { IoIosCart, IoIosMenu } from "react-icons/io";

import Brand from '../assets/brand.png'



const Navbar = () => {
  return (
    <div className='w-full shadow  shadow-gray-500/20 z-50'>
        <div className='flex justify-around md:justify-center items-center py-5 w-full lg:gap-12'>
            <div className='mx-8 md:mx-4'> 
                <img src={Brand} />
            </div>
            <div className='flex items-center justify-between'>
           
                <ul className='hidden md:flex gap-5'>
                    <li>
                        <a>HOME</a>
                    </li>
                    <li>
                        <a>ABOUT</a>
                    </li>
                    <li>
                        <a>FEATURE FOOD</a>
                    </li>
                    <li>
                        <a>FOOD GALLERY</a>
                    </li>
                    <li>
                        <a>BLOG</a>
                    </li>
                    <li>
                        <a>CONTACT</a>
                    </li>
                </ul>
              </div>

            <div className=' flex items-center justify-between'>
                <button className='border border-white py-3 bg-transparent hover:bg-[var(--dark-black)] duration-300 ease-in-out mx-4 lg:mx-0 px-8 rounded-md'><IoIosCart size={25} className='text-[var(--yellow)]' /></button>  
                <button className=' ml-6 py-3 bg-[var(--red)] hidden lg:block group hover:bg-[var(--yellow)] duration-300 ease-in-out px-8 rounded-md'><a className='group-hover:text-black'>ORDER ONLINE</a></button> 
                <div className='md:hidden'>
                    <IoIosMenu className='text-[var(--gray)]' size={30}/>
                </div>
              </div>
     
              
        </div>
    </div>
  )
}

export default Navbar
