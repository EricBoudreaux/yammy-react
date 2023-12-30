import React from 'react'


import 'animate.css';


const MenuItem = ({picture, name, price}) => {
  return (
    <div className='my-4 hover:bg-gray-600 p-2 md:p-4 md:rounded-lg duration-300 ease-in-out animate__animated animate__slideInUp'>
            <div>
                <div className='flex justify-between px-2 md:px-0 gap-2 md:gap-4 '>


                    {/* Picture */}
                    <div className='border inline-block p-4 rounded-full border-gray-700'>
                        <img src={picture} className='h-16 min-w-16 rounded-full' alt="" />
                    </div>
                    <div>
                    {/* Name */}
                    <div className='flex justify-between'> 
                        <h4>{name}</h4>
                        {/* Price */}
                        <div className='flex items-center gap-5'>
                            <small className='text-gray-600 hidden md:block'>...........................................</small>
                            <p className='text-[var(--yellow)] me-12 md:me-0 font-bold'>${price}</p>
                        </div>
                    </div>
                    {/* Discription */}
                    <p>We can't think of a better way to celebrate summer than with these omg-worthy hamburgers. Plus, try our over-the-top creative cheeseburgers</p>
                    </div>

                </div>


            </div>
    </div>
  )
}

export default MenuItem
