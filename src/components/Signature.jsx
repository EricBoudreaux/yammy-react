import React from 'react'

import 'animate.css';


import sig1 from '../assets/sig-1.png'
import sig2 from '../assets/sig-2.png'
import sig3 from '../assets/sig-3.png'
import sig4 from '../assets/sig-4.png'

import sig5 from '../assets/sig-5.png'
import sig6 from '../assets/sig-6.png'
import sig7 from '../assets/sig-7.png'
import sig8 from '../assets/sig-8.png'

const Signature = () => {
  return (
    <div className='specials pb-6 animate__animated animate__slideInLeft'>
        <h3 className='text-center max-w-[520px]  mx-auto mt-24'>Our Signature Burger Is The Star of The Show</h3>
        <p className='text-center max-w-[396px] mx-auto'>Duis convallis convallis tellus id interdum. In mollis nunc sed id semper risus in hendrerit.</p>

        <div className='max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-24 px-4'>
          <img src={sig1} className='hover:scale-105 hover:rotate-2 duration-300 ease-in-out' alt="" />
          <img src={sig2} className='hover:scale-105 hover:rotate-2 duration-300 ease-in-out lg:mt-[-45px]' alt="" />
          <img src={sig3} className='hover:scale-105 hover:rotate-2 duration-300 ease-in-out' alt="" />
          <img src={sig4} className='hover:scale-105 hover:rotate-2 duration-300 ease-in-out lg:mt-[-45px]'alt="" />
          <img src={sig5} className='hover:scale-105 hover:rotate-2 duration-300 ease-in-out' alt="" />
          <img src={sig6} className='hover:scale-105 hover:rotate-2 duration-300 ease-in-out lg:mt-[-45px]' alt="" />
          <img src={sig7} className='hover:scale-105 hover:rotate-2 duration-300 ease-in-out' alt="" />
          <img src={sig8} className='hover:scale-105 hover:rotate-2 duration-300 ease-in-out lg:mt-[-45px]'alt="" />


        </div>

    </div>
  )
}

export default Signature
