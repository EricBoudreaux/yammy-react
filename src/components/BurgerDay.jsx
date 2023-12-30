import React from 'react'
import 'animate.css';

const BurgerDay = () => {
  return (
    <div className='burgerday max-w-[1200px] md:h-[420px] mx-auto rounded'>
        <div className='mx-auto p-20  animate__animated animate__slideInUp'>
            <h3 className=' max-w-[420px] '>Instore Offer For National Burger Day</h3>
            <p className=' max-w-[420px] '>Nec feugiat nisl pretium fusce id velit ut. At tempor commodo ullamcorper Tincidunt dui ornare lectu amet.</p>
            <button className='mt-12 py-3 bg-[var(--red)]  group hover:bg-[var(--yellow)] duration-300 ease-in-out px-8 rounded-md'><a className='group-hover:text-black'>ORDER ONLINE</a></button> 
        </div>

    </div>
  )
}

export default BurgerDay
