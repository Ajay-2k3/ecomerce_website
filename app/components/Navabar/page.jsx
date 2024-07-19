/* eslint-disable react/no-unknown-property */
"use client"
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserInfo from '../userInfo/page';
import { useSession,signIn } from 'next-auth/react';
import { Avatar } from "@mui/material";
import {Badge,Tooltip} from "@nextui-org/react"
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { IoSearchSharp } from "react-icons/io5";



function Navbar() {
    const [open, setOpen] = useState(false);

    const handleMouseEnter = () => setOpen(true);
    const handleMouseLeave = () => setOpen(false);

    const { data: session } = useSession();
    const [isOpen] = useState(false);

  return (
    <div className=' shadow-md shadow-slate-400  w-full top-0 flex bg-white justify-between items-center  text-black py-1 relative'>
        <div className='flex text-black'>
            <div className=' ml-3 flex justify-between gap-1 mr-16 self-center ' >
                <h1 className='flex-grow font-semibold m-0 p-0 w-0 max-md:text-sm content-center text-2xl'>Shopzz</h1>
            </div>

        </div>
        <div className=' lg:flex hidden relative '>
            <ul className=' md:flex gap-5 list-none font-semibold hidden text-black'>
            <li className=' py-1 px-2 rounded-md hover:text-white hover:bg-blue-600'> 
            <Link href="/" className=''>Home</Link>
                </li>
                <li className=' py-1 px-2 rounded-md hover:text-white hover:bg-blue-600'> 
                <Tooltip color='bg-custom-gradient'
                          content=" " >
                        <a href="#" >Men</a>
                    </Tooltip> 
                </li>
                <li className=' py-1 px-2 rounded-md hover:text-white hover:bg-blue-600'> 
                <a href="#" >Women</a>
                </li>
                <li className=' py-1 px-2 rounded-md hover:text-white hover:bg-blue-600'> 
                <a href="#" >Kids</a>
                </li>
                <li className=' py-1 px-2 rounded-md hover:text-white hover:bg-blue-600'> 
                <Popover placement="bottom" offset={20} showArrow={true} isOpen={open} className='relative'>
      <PopoverTrigger>
        <button
          className='outline-none'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Search
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="flex flex-col p-0 w-fit sticky"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <form className="mx-auto">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-80 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
                </li>
            </ul>           
        </div>
        <div className='flex flex-col mr-5'>

            <div className=' flex justify-between gap-6 items-center'>
                <div className='max-md:hidden flex '>  
                    {session ? (
                            <Popover placement="bottom">
                            <PopoverTrigger>
                                <Avatar className='bg-black hover:cursor-pointer'>
                                {session.user.name ? session.user.name[0].toUpperCase() : ""}
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="flex flex-col py-2 gap-3 w-52 bg-transparent  border-medium shadow-lg shadow-slate-500 border-white backdrop-blur-2xl text-black " >
                                <UserInfo/>
                            </PopoverContent>
                           </Popover>

                        ) : (
                        <>
                            <button onClick={() => signIn()} type="button" className=' border-slate-50 border-solid p-2 border-2 rounded-3xl pl-6 pr-6 font-bold hover:relative hover:bottom-0.5'>Login</button>
                        </>
                    )}
                </div>

                <div className=' md:right-3 inline-flex flex-col max-md:hidden  relative left-2 ml-0 text-center'> 
                       <Badge content="5" size="sm" color="primary" className='text-center relative'> 
                        <button type="button" className=' relative hover:bottom-1 w-4 h-6'>
                        <ShoppingCartIcon 
                        className='self-center'/> 
                          
                        </button>  </Badge> 
                    
                </div>
 
                <div className=' relative  -end-3 lg:hidden rounded-lg m-0'>
                <Popover placement="bottom" className='relative' >
                            
                <  PopoverTrigger>
                {!isOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>                        ):( 
                                
                          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-x"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>  )}

                    </PopoverTrigger>
                  <PopoverContent className=" sticky top-0 flex flex-col py-2 gap-3 w-52 bg-transparent  border-medium shadow-lg shadow-slate-500 border-white backdrop-blur-2xl text-black " >
                                <div>
                                <UserInfo/>
                                </div>
                                
                                  <Accordion  className=' text-white'>
                                    <AccordionItem key="anchor" aria-label="Anchor"   title={<span className="text-black font-medium text-medium">Search</span>} className='text-white'>
                                        <form className="mx-auto relative">
                                            <label htmlFor="default-search" className="mb-2 text-xs font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                            <div className="relative">
                                              <input type="search" id="default-search" m-0 className="block w-40 p-1 pr-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                              <button className=' absolute bottom-0  py-2 px-1.5 rounded-r-lg left-36 bg-blue-600 border-none '>
                                              <IoSearchSharp className=' size-xs'/>
                                            </button>
                                            </div>
                                            

                                        </form>
                                     </AccordionItem>
                                </Accordion>
                    
                                  <Link href="#" className='text-left text-md self-start font-semibold hover:bg-black hover:text-white rounded-lg p-2 pl-3 w-full m-1ml-2'>home</Link>
                                                                  
                                 
                    </PopoverContent>
                   </Popover>
                </div> 
            </div>    
            </div>
    </div>
  )
}

export default Navbar