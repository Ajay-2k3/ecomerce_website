"use client"
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Dropdown,DropdownItem,DropdownTrigger,DropdownMenu } from '@nextui-org/dropdown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import UserInfo from '../userInfo/page';
import { useSession,signIn } from 'next-auth/react';
import { Avatar } from "@mui/material";
import {Badge} from "@nextui-org/react"
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";


function Navbar() {

    const { data: session } = useSession();
    const [isOpen] = useState(false);

  return (
    <div className=' w-full top-0 flex bg-custom-gradient justify-between items-center  text-slate-50 p-1 relative'>
        <div className='flex text-slate-50'>
            <div className=' ml-6 flex justify-between gap-1 mr-16 self-center ' >
                <h1 className='flex-grow font-semibold m-0 p-0 w-0 max-md:text-sm content-center text-2xl'>Shopzz</h1>
            </div>
            <div className=' relative  border-slate-50 ml-28 max-md:ml-1 mr-5 max-md:mr-3 self-center'>
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" name="search_item" id="search_" placeholder=''
                className='h-9 max-md:h-7 border-none rounded-lg outline-none placeholder:p-6 text-slate-950 placeholder:stroke-slate-300 pl-9 pr-20 max-md:w-56'
                /> 
                <button type="search" className=" max-md:h-7 max-md:text-center  absolute  -end-0.5 bg-orange-600  text-slate-50 outline-none  font-medium rounded-r-lg text-sm px-4 max-md:py-1 py-2 ">Search</button>
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
                <div className='max-md:hidden flex '>  
                    {session ? (
                            <Popover placement="bottom">
                            <PopoverTrigger>
                                <Avatar/>
                            </PopoverTrigger>
                            <PopoverContent className="flex flex-col py-2 gap-3 w-52 bg-custom-gradient " >
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
 
                <div className=' relative  right-0 lg:hidden'>
                    <Dropdown className=' bg-black flex w-full relative top-2'>
                      <DropdownTrigger>
                        {!isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                        ):( 
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-x"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>  )}
                                     
                      </DropdownTrigger>
                      <DropdownMenu >
                        <DropdownItem color='white' className='hover:bg-black p-0 max-md:flex hidden'>
                            <UserInfo/>
                        </DropdownItem>
                        <DropdownItem>
                            <Link href="/"> Home</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link href="#">Men</Link>                     
                        </DropdownItem>
                        <DropdownItem>
                            <Link href="#">Women</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link href="#">My Favorites</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link href="#">Cart</Link>
                        </DropdownItem>

                      </DropdownMenu>
                    </Dropdown>
                </div> 
            </div>    
            </div>
    </div>
  )
}

export default Navbar