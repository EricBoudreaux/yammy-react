import React from 'react'
import 'animate.css';


const Delivery = () => {
  return (
    <div className='p-24 delivery max-w-[1200px] md:h-[480px] rounded-lg mx-auto bg-[#2A2E3E] flex justify-between'>
        <div className='mx-auto animate__animated animate__slideInLeft'>
            <h3 className=' max-w-[420px] '>Food deliverying amazing experience</h3>
            <p className=' max-w-[420px] '>Nec feugiat nisl pretium fusce id velit ut. At tempor commodo ullamcorper Tincidunt dui ornare lectu amet.</p>
            <button className='mt-12 py-3 bg-[var(--red)]  group hover:bg-[var(--yellow)] duration-300 ease-in-out px-8 rounded-md'><a className='group-hover:text-black'>ORDER ONLINE</a></button> 
        </div>
        <div className='rotate-[-45deg] md:mr-[100px] hidden lg:block animate__animated animate__slideInRight'>
            <h3 className='font-semibold'>Fast & Free</h3>
            <h3 className='font-semibold bg-[var(--yellow)]  text-black max-w-[200px] text-center p-2'>DELIVERY</h3>
        </div>
    </div>
  )
}

export default Delivery
