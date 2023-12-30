import React from 'react'
import 'animate.css';

import IngredientsPic from '../assets/ingredients.png'
import Blip from '../assets/blip.png'

const Ingredients = () => {
  return (
    <div className='w-full mt-24'>
        <div className='animate__animated animate__slideInDown'>
            <h3 className='text-center max-w-[396px] mx-auto'>Burger Ingredients A Better Flavor</h3>
            <p className='text-center max-w-[420px] mx-auto'>Nec feugiat nisl pretium fusce id velit ut. At tempor commodo ullamcorper Tincidunt dui ornare lectu amet.</p>
        </div>

        <div className='ingredients md:mt-12 w-full'>
            <div className='lg:flex justify-between px-24 py-12'>
                
                <div className='lg:mt-[-50px] animate__animated animate__slideInLeft'>          

                    <div className='max-w-[220px] lg:max-w-[500px] mx-auto flex items-center'>
                        <div>
                            <h4 className='max-w-[220px] text-center lg:text-start'>Briouche Buns</h4>
                            <p className='max-w-[220px] text-center lg:text-start'>Ornare arcu odio ut sem nulla Fauclibus turpi bendum</p>
                        </div>
                        <div className='hidden lg:block border-dotted border-b-4 lg:min-w-[80px]  xl:min-w-[180px] mx-4' />
                        <img className='hidden lg:block' src={Blip} alt="" />
                    </div>

                    <div className='max-w-[220px] lg:max-w-[500px] mx-auto flex items-center my-12'>
                        <div>
                            <h4 className='max-w-[220px] text-center lg:text-start'>Organic Veggies</h4>
                            <p className='max-w-[220px] text-center lg:text-start'>Ornare arcu odio ut sem nulla Fauclibus turpi bendum</p>
                        </div>
                        <div className='hidden lg:block border-dotted border-b-4 lg:min-w-[80px]  xl:min-w-[180px] mx-4' />
                        <img className='hidden lg:block' src={Blip} alt="" />
                    </div>

                    <div className='max-w-[220px] lg:max-w-[500px] mx-auto flex items-center'>
                        <div>
                            <h4 className='max-w-[220px] text-center lg:text-start'>Pound Ground Beef</h4>
                            <p className='max-w-[220px] text-center lg:text-start'>Ornare arcu odio ut sem nulla Fauclibus turpi bendum</p>
                        </div>
                        <div className='hidden lg:block border-dotted border-b-4 lg:min-w-[80px]  xl:min-w-[180px] mx-4' />
                        <img className='hidden lg:block' src={Blip} alt="" />
                    </div>

                </div>

                <div className='h-[500px] lg:hidden'></div>

                <div className='lg:mt-[-50px] animate__animated animate__slideInRight'>

                <div className='max-w-[220px] lg:max-w-[500px] mx-auto flex items-center my-12'>
                    <img className='hidden lg:block' src={Blip} alt="" />

                    <div className='hidden lg:block border-dotted border-b-4 lg:min-w-[80px]  xl:min-w-[180px] mx-4' />
                        <div>
      
                            <h4 className='max-w-[220px] text-center lg:text-end'>Organic Veggies</h4>
                            <p className='max-w-[220px] text-center lg:text-end'>Ornare arcu odio ut sem nulla Fauclibus turpi bendum</p>
                        </div>
      
                    </div>

                    <div className='max-w-[220px] lg:max-w-[500px] mx-auto flex items-center my-12'>
                    <img className='hidden lg:block' src={Blip} alt="" />

                    <div className='hidden lg:block border-dotted border-b-4 lg:min-w-[80px]  xl:min-w-[180px] mx-4' />
                        <div>
      
                            <h4 className='max-w-[220px] text-center lg:text-end'>Organic Veggies</h4>
                            <p className='max-w-[220px] text-center lg:text-end'>Ornare arcu odio ut sem nulla Fauclibus turpi bendum</p>
                        </div>
      
                    </div>

                    <div className='max-w-[220px] lg:max-w-[500px] mx-auto flex items-center my-12'>
                    <img className='hidden lg:block' src={Blip} alt="" />

                    <div className='hidden lg:block border-dotted border-b-4 lg:min-w-[80px]  xl:min-w-[180px] mx-4' />
                        <div>
      
                            <h4 className='max-w-[220px] text-center lg:text-end'>Organic Veggies</h4>
                            <p className='max-w-[220px] text-center lg:text-end'>Ornare arcu odio ut sem nulla Fauclibus turpi bendum</p>
                        </div>
      
                    </div>

                </div>




            </div>


        </div>
    </div>
  )
}

export default Ingredients
