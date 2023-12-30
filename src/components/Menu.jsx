import React, {useState} from 'react'
import MenuItem from './MenuItem'


import 'animate.css';

import Special1 from '../assets/special-1.jpeg'
import Special2 from '../assets/special-2.jpeg'
import Special3 from '../assets/special-3.jpeg'
import Special4 from '../assets/special-4.jpeg'
import Special5 from '../assets/special-5.jpeg'
import Special6 from '../assets/special-6.jpeg'



const Menu = () => {


    const [menu, setMenu] = useState("all")


  return (
    <div className='w-full mt-2 animate__animated animate__slideInLeft'>

        <h3 className='text-center  mx-auto'>Most Popular Burger Items</h3>
        <p className='text-center max-w-[396px] mx-auto'>Duis convallis convallis tellus id interdum. In mollis nunc sed id semper risus in hendrerit.</p>


        <div className='max-w-[700px]  mx-auto mt-14'>
            <ul className='flex justify-around mb-12'>
                <li onClick={() => setMenu('all')} className={menu === 'all' ? 'border-b-2 hover:bg-[var(--red)] w-full text-center py-4 duration-300 ease-in-out cursor-pointer border-[var(--red)]' : 'border-b-2 border-transparent hover:bg-[var(--red)] w-full text-center py-4 duration-300 ease-in-out cursor-pointer'}>
                    <p>All</p>
                </li>
                <li onClick={() => setMenu('french')}  className={menu === 'french' ? 'border-b-2 hover:bg-[var(--red)] w-full text-center py-4 duration-300 ease-in-out cursor-pointer border-[var(--red)]' : 'border-b-2 border-transparent hover:bg-[var(--red)] w-full text-center py-4 duration-300 ease-in-out cursor-pointer'}>
                    <p>French</p>
                </li>
                <li onClick={() => setMenu('american')}  className={menu === 'american' ? 'border-b-2 hover:bg-[var(--red)] w-full text-center py-4 duration-300 ease-in-out cursor-pointer border-[var(--red)]' : 'border-b-2 border-transparent hover:bg-[var(--red)] w-full text-center py-4 duration-300 ease-in-out cursor-pointer'}>
                    <p>American</p>
                </li>
                <li onClick={() => setMenu('italian')}  className={menu === 'italian' ? 'border-b-2 hover:bg-[var(--red)] w-full text-center py-4 duration-300 ease-in-out cursor-pointer border-[var(--red)]' : 'border-b-2 border-transparent hover:bg-[var(--red)] w-full text-center py-4 duration-300 ease-in-out cursor-pointer'}>
                    <p>Italian</p>
                </li>
                <li onClick={() => setMenu('bangla')}  className={menu === 'bangla' ? 'border-b-2 hover:bg-[var(--red)] w-full text-center py-4 duration-300 ease-in-out cursor-pointer border-[var(--red)]' : 'border-b-2 border-transparent hover:bg-[var(--red)] w-full text-center py-4 duration-300 ease-in-out cursor-pointer'}>
                    <p>Bangla</p>
                </li>
                <li onClick={() => setMenu('chinese')}  className={menu === 'chinese' ? 'border-b-2 hover:bg-[var(--red)] w-full text-center py-4 duration-300 ease-in-out cursor-pointer border-[var(--red)]' : 'border-b-2 border-transparent hover:bg-[var(--red)] w-full text-center py-4 duration-300 ease-in-out cursor-pointer'}>
                    <p>Chinese</p>
                </li>
            </ul>


            {menu === 'all' ? 
                <div className='animate__animated animate__fadeInLeft'>
                    <MenuItem picture={Special1} name={'Cheezeburger'} price={10} />
                    <MenuItem picture={Special2} name={'Knuckle Sandwich'} price={12} />
                    <MenuItem picture={Special3} name={'Chicken Sandwich'} price={14} />
                    <MenuItem picture={Special4} name={'Bacon Ranch'} price={11} />
                    <MenuItem picture={Special5} name={'Double Cheeze'} price={14} />
                    <MenuItem picture={Special6} name={'Turkey Burger'} price={13} />
                </div>
             : 
                null
            }

            {menu === 'french' ? 
                <div className='animate__animated animate__fadeInRight'>
                    <MenuItem picture={Special4} name={'Bacon Ranch'} price={11} />
                    <MenuItem picture={Special5} name={'Double Cheeze'} price={14} />
                    <MenuItem picture={Special6} name={'Turkey Burger'} price={13} />
                    <MenuItem picture={Special2} name={'Knuckle Sandwich'} price={12} />
                    <MenuItem picture={Special3} name={'Chicken Sandwich'} price={14} />
                    <MenuItem picture={Special1} name={'Cheezeburger'} price={10} />
                </div>
             : 
                null
            }
            {menu === 'american' ? 
                <div className='animate__animated animate__fadeInLeft'>
    
                    <MenuItem picture={Special2} name={'Knuckle Sandwich'} price={12} />
                    <MenuItem picture={Special3} name={'Chicken Sandwich'} price={14} />
                    <MenuItem picture={Special4} name={'Bacon Ranch'} price={11} />
                    <MenuItem picture={Special1} name={'Cheezeburger'} price={10} />
                    <MenuItem picture={Special5} name={'Double Cheeze'} price={14} />
                    <MenuItem picture={Special6} name={'Turkey Burger'} price={13} />
                </div>
             : 
                null
            }
            {menu === 'italian' ? 
                <div className='animate__animated animate__fadeInRight'>
                    <MenuItem picture={Special6} name={'Turkey Burger'} price={13} />
                    <MenuItem picture={Special5} name={'Double Cheeze'} price={14} />
                    <MenuItem picture={Special2} name={'Knuckle Sandwich'} price={12} />
                    <MenuItem picture={Special3} name={'Chicken Sandwich'} price={14} />
                    <MenuItem picture={Special4} name={'Bacon Ranch'} price={11} />
                    <MenuItem picture={Special1} name={'Cheezeburger'} price={10} />
                </div>
             : 
                null
            }

            {menu === 'bangla' ? 
                <div className='animate__animated animate__fadeInLeft'>
                    <MenuItem picture={Special5} name={'Double Cheeze'} price={14} />
                    <MenuItem picture={Special6} name={'Turkey Burger'} price={13} />
                    <MenuItem picture={Special3} name={'Chicken Sandwich'} price={14} />
                    <MenuItem picture={Special2} name={'Knuckle Sandwich'} price={12} />
                    <MenuItem picture={Special1} name={'Cheezeburger'} price={10} />
                    <MenuItem picture={Special4} name={'Bacon Ranch'} price={11} />
                </div>
             : 
                null
            }

            {menu === 'chinese' ? 
                <div className='animate__animated animate__fadeInRight'>
                    <MenuItem picture={Special1} name={'Cheezeburger'} price={10} />
                    <MenuItem picture={Special2} name={'Knuckle Sandwich'} price={12} />
                    <MenuItem picture={Special4} name={'Bacon Ranch'} price={11} />
                    <MenuItem picture={Special5} name={'Double Cheeze'} price={14} />
                    <MenuItem picture={Special6} name={'Turkey Burger'} price={13} />
                    <MenuItem picture={Special3} name={'Chicken Sandwich'} price={14} />
                </div>
             : 
                null
            }




        </div>
    </div>
  )
}

export default Menu
