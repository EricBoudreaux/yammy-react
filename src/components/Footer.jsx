import React from 'react'

import Brand from '../assets/brand.png'




import { FaXTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='bg-[#2A2E3E] w-full mx-auto footer'>
        <div className='grid grid-cols-2 lg:grid-cols-4 px-12 mx-auto'>

            {/* Brand and Socials */}
            <div className=' py-12 px-1 mx-auto'>
                <img src={Brand} />
                <p className='my-4 text-sm'>Nec feugia nisl pretium fusce id velit ut. At tempor commodo ullacorper tincidunt dui ut ornre lectus sit amet Ac turpis egestas a lacus.</p>
                <div className='flex gap-1'>
                    <div className='text-white h-10 w-10 flex justify-center items-center bg-[#59ADEC] rounded-full'>
                        <FaXTwitter />
                    </div>
                    <div className='text-white h-10 w-10 flex justify-center items-center bg-[#3C5A96] rounded-full'>
                        <FaFacebookF />
                    </div>
                    <div className='text-white h-10 w-10 flex justify-center items-center bg-[#41729A] rounded-full'>
                        <FaInstagram />
                    </div>
                    <div className='text-white h-10 w-10 flex justify-center items-center bg-[#CB1D25] rounded-full'>
                        <FaYoutube />
                    </div>
                </div>
            </div>
            {/* Latest Items */}
            <div className='text-[var(--gray)] py-12 px-4 mx-auto'>
                <h4>Latest Items</h4>
                <div className='border-b-2 w-12'/>
                <ul className='pt-4'>
                    <li className='py-2'>Cheeseburgers</li>
                    <li className='py-2'>Ingredients</li>
                    <li className='py-2'>Beef</li>
                    <li className='py-2'>Burger</li>
                    <li className='py-2'>Restaurant</li>
                </ul>
            </div>

            {/* Useful Links */}
            <div className='text-[var(--gray)] py-12 px-4 mx-auto'>
                <h4>Latest Items</h4>
                <div className='border-b-2 w-12'/>
                <ul className='pt-4'>
                    <li className='py-2'>Our Blog</li>
                    <li className='py-2'>About us</li>
                    <li className='py-2'>Feature Food</li>
                    <li className='py-2'>Food gallery</li>
                    <li className='py-2'>Client Review</li>
                    <li className='py-2'>Contact</li>
                    <li className='py-2'>liscensing</li>
                </ul>
            </div>


           {/* Hours */}
           <div className='text-[var(--gray)] py-12 px-4 mx-auto'>
                <h4>Opening Hours</h4>
                <div className='border-b-2 w-12'/>
                <ul className='pt-4'>
                    <li className='py-2'>M: 08.00 - 5.00</li>
                    <li className='py-2'>T: 08.00 - 5.00</li>
                    <li className='py-2'>W: 08.00 - 5.00</li>
                    <li className='py-2'>T: 08.00 - 5.00</li>
                    <li className='py-2'>F: 08.00 - 5.00</li>
                    <li className='py-2'>S: 11.00 - 5.00</li>
                    <li className='py-2 flex items-end gap-2'>Sunday: <p className='text-[var(--yellow)]'>Closed</p></li>

                </ul>
            </div>
        </div>

      
    </div>
  )
}

export default Footer
