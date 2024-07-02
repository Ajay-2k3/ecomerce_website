"use client"; 
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Login from '@/app/login/page';
import PopupMenu from '../popupmenu';
import { useRouter } from 'next/navigation';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);



  return (
    <div className=' w-full top-0 flex bg-custom-gradient justify-between items-center shadow-slate-50 shadow-md text-slate-50'>
        <div className='flex text-slate-50'>
            <div className=' ml-6 flex justify-between gap-1 mr-16 ' >
                <img src="/logo_big.png" alt="logo" 
                width={50}
                height={50}
                />
                <h1 className=' font-semibold w-8 content-center text-2xl'>Shopzz</h1>
            </div>
            <div className=' max-md:hidden relative  border-slate-50 ml-5 m-3 delay-200 '>
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    </div>
                <input type="search" name="search_item" id="search_" placeholder=''
                className='h-9 border-none rounded-lg outline-none placeholder:p-6 text-slate-950 placeholder:stroke-slate-300 pl-9 pr-20 '
                /> 
                <button type="search" class=" absolute  -end-0.5 bg-gradient-to-r from-sky-400 to-blue-700  hover:from-blue-900 hover:to-sky-600 text-slate-50 outline-none  font-medium rounded-r-lg text-sm px-4 py-2 ">Search</button>
            </div>
        </div>
        <div className=' lg:flex hidden '>
            <ul className=' md:flex gap-5 list-none font-semibold hidden text-slate-50 '>
                <li> 
                    <Link href="/" className='hover:relative hover:bottom-1 hover:decoration-2 underline-offset-8 hover:underline  hover:decoration-solid decoration-white'>Home</Link>
                    </li>
                <li> 
                    <a href="#" className='hover:relative hover:bottom-1 hover:decoration-2 underline-offset-8 hover:underline  hover:decoration-solid decoration-white'>Men</a>
                    </li>
                <li>
                    <a href="#" className='hover:relative hover:bottom-1 hover:decoration-2 underline-offset-8 hover:underline  hover:decoration-solid decoration-white'>Women</a>
                </li>
                <li>
                    <a href="#" className='hover:relative hover:bottom-1 hover:decoration-2 underline-offset-8 hover:underline  hover:decoration-solid decoration-white'>Kids</a>
                </li>
            </ul>           
        </div>
        <div className='flex flex-col mr-5'>

            <div className=' flex justify-between gap-6 items-center'>
                <div className='max-sm:hidden flex '>
                <Link href="/login">
                 <button  type="button" className=' border-slate-50 border-solid p-2 border-2 rounded-3xl pl-6 pr-6 font-bold hover:relative hover:bottom-0.5'>Login</button>
                  </Link>  
                    

                </div>
                <div className=' lg:flex hidden  items-center gap-9 justify-between '>
                    <svg class="h-8 w-8 text-red-500 hover:fill-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >  <path className=' hover:bg-red-500' d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg> 
                </div>
                <div className=' md:right-3 inline-flex flex-col  relative left-2 ml-0'> 
                    <button type="button" className=' relative bottom-2 hover:bottom-3'>
                     <span  className=' relative  top-6 left-3 block rounded-full  font-semibold w-3 h-3 text-center text-sm/[1px] justify-end align-end content-end p-1 m-0 gap-0'>0</span>                
                    <img src="/shoppingcart.svg" alt="cart" 
                    className=' w-9 h-9 sm:visible '/> 
      
                    </button>  
                 
                </div>
 
                <div className=' max-lg:flex hidden relative  right-0'>
                    <button type="button" onClick={() => setIsOpen((prev) => !prev)} className=' cursor-pointer hover:bottom-0.5'>
                        {!isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                        ):( 
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-x"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>                        )}
                    </button>
                </div> 
                {isOpen && <PopupMenu/> }    
            </div>    
            </div>
    </div>
  )
}

export default Navbar