/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import UserInfo from '../userInfo/page';
import { useSession, signIn } from 'next-auth/react';
import { Avatar, Drawer } from '@mui/material';
import {  Tooltip, Popover, PopoverTrigger, PopoverContent, Accordion, AccordionItem } from "@nextui-org/react";
import { IoSearchSharp } from "react-icons/io5";
import MensCartegories from '@/app/components/mensCartegories/page'
import WomensCartegories from '@/app/components/womensCartegories/page'
import Kidscartegories from '@/app/components/kidscartegories/page'

function Navbar() {
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();
    const [isOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div className='shadow-md shadow-slate-400 w-full top-0 flex bg-white justify-between items-center text-black py-2 relative'>
            <div className='flex text-black'>
                <div className='ml-3 flex justify-between gap-1 mr-16 self-center'>
                    <h1 className='flex-grow font-semibold m-0 p-0 w-0 max-md:text-sm content-center text-2xl'>shopzz</h1>
                </div>
            </div>
            <div className='lg:flex hidden relative'>
                <ul className='md:flex gap-5 list-none font-semibold hidden text-black'>
                    <li className='py-1 px-2 rounded-md hover:text-white hover:bg-blue-600'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='py-1 px-2 rounded-md hover:text-white hover:bg-blue-600'>
                        <Tooltip color='bg-custom-gradient' content={<MensCartegories/>}>
                            <a href="#">Men</a>
                        </Tooltip>
                    </li>
                    <li className='py-1 px-2 rounded-md hover:text-white hover:bg-blue-600'>
                    <Tooltip color='bg-custom-gradient' content={<WomensCartegories/>}>
                        <a href="#">Women</a>
                    </Tooltip>
                    </li>
                    <li className='py-1 px-2 rounded-md hover:text-white hover:bg-blue-600'>
                    <Tooltip color='bg-custom-gradient' content={<Kidscartegories/>}>
                        <a href="#">Kids</a>
                    </Tooltip>
                    </li>
                    <li className='py-1 px-2 rounded-md hover:text-white hover:bg-blue-600'>
                        <div>
                            <button onClick={toggleDrawer(true)}>Search</button>
                            <Drawer open={open} onClose={toggleDrawer(false)} anchor='top'>
                                <div className='py-8 px-2 flex relative\'>
                                    <input type="search" className=' h-9 text-lg w-full outline-none mx-16 pr-10 border-b-gray-950 border-b-medium  placeholder:text-slate-600 placeholder:pl-5 ' placeholder='Search' />
                                    <button type="button" className=' absolute end-20 hover:text-blue-600'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="  hover:cursor-pointer size-8 " width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>                                      </button>
                                </div>
                            </Drawer>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col mr-5'>
                <div className='flex justify-between gap-6 items-center'>
                    <div className='max-md:hidden flex'>
                        {session ? (
                            <Popover placement="bottom">
                                <PopoverTrigger>
                                    <Avatar className='bg-black hover:cursor-pointer'>
                                        {session.user.name ? session.user.name[0].toUpperCase() : ""}
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="flex flex-col py-2 gap-3 w-52 bg-white bg-opacity-35 border-medium shadow-lg shadow-slate-500 border-white backdrop-blur-2xl text-black">
                                    <UserInfo />
                                </PopoverContent>
                            </Popover>
                        ) : (
                            <button onClick={() => signIn()} type="button" className='border-slate-50 border-solid p-2 border-2 rounded-3xl pl-6 pr-6 font-bold hover:relative hover:bottom-0.5'>
                                Login
                            </button>
                        )}
                    </div>
                    <div className='md:right-3 inline-flex flex-col max-md:hidden relative  ml-3 text-center'>
                        <button type="button" className='relative w-4 h-6'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                        </button>
                    </div>
                    <div className='relative -end-3 lg:hidden rounded-lg m-0'>
                        <Popover placement="bottom" className='relative'>
                            <PopoverTrigger>
                                {!isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                                        <line x1="4" x2="20" y1="12" y2="12" />
                                        <line x1="4" x2="20" y1="6" y2="6" />
                                        <line x1="4" x2="20" y1="18" y2="18" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-x">
                                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                                        <path d="m15 9-6 6" />
                                        <path d="m9 9 6 6" />
                                    </svg>
                                )}
                            </PopoverTrigger>
                            <PopoverContent className="sticky top-0 flex flex-col py-2 gap-3 w-52 bg-white bg-opacity-35 border-medium shadow-lg shadow-slate-500 border-white backdrop-blur-2xl text-black">
                                <UserInfo />
                                <Accordion className='text-white'>
                                    <AccordionItem key="anchor" aria-label="Anchor" title={<span className="text-black font-medium text-medium">Search</span>} className='text-white'>
                                        <form className="mx-auto relative">
                                            <label htmlFor="default-search" className="mb-2 text-xs font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                            <div className="relative">
                                                <input type="search" id="default-search" className="block w-40 p-1 pr-5 text-sm text-gray-900 border-black border-solid rounded-lg bg-gray-50 border-small" placeholder="Search" required />
                                                <button className='absolute bottom-0 py-2 px-1.5 rounded-r-lg left-36 bg-blue-600 border-none'>
                                                    <IoSearchSharp className='size-xs' />
                                                </button>
                                            </div>
                                        </form>
                                    </AccordionItem>
                                </Accordion>
                                <Link href="/" className='text-left text-md self-start font-semibold hover:bg-black hover:text-white rounded-lg p-2 pl-3 w-full m-1 ml-2'>Home</Link>
                                <Link href="#" className='text-left text-md self-start font-semibold hover:bg-black hover:text-white rounded-lg p-2 pl-3 w-full m-1 ml-2'>Cart</Link>
                                <Link href="#" className='text-left text-md self-start font-semibold hover:bg-black hover:text-white rounded-lg p-2 pl-3 w-full m-1 ml-2'>Order</Link>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
