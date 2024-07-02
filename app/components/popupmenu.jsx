import React from 'react';
import Link from 'next/link';
function popupMenu() {
  return (
   <>
        <div className=' flex absolute flex-col lg:hidden  left-4 right-4 mr-4 ml-4 top-20 bg-black overflow-hidden rounded-xl '>    
                    <ul className=' md:3xl:hidden flex flex-col relative bg-black gap-3 list-none font-semibold  text-slate-50 '>
                        <div className='max-md:flex hidden flex-col overflow-hidden '>
                            <div className='ms:3xl:hidden  inline  border-b-black  m-3 delay-200 items-center bg-transparent hover:bg-transparent'>
                                <div class=" relative  top-7 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" name="search_item" id="search_" placeholder=''
                                className='h-9 border-none rounded-l-lg outline-none placeholder:p-6 placeholder:stroke-slate-300 pl-9 text-slate-950'
                                /> 
                                <button type="submit" class=" text-slate-50 absolute  -start  bg-orange-500 hover:bg-orange-600 outline-none  font-medium rounded-r-lg text-sm px-4 py-2 ">Search</button>
                            </div>                             
                        </div>
                        <li className=' hover:bg-zinc-700 hover:text-orange-50 p-3 pl-6 sm:hidden'> 
                            <Link href="../login">Login</Link>
                        </li>
                        <li className=' hover:bg-zinc-700 hover:text-orange-50 p-3 pl-6'> 
                            <Link href="/">Home</Link>
                        </li>
                        <li className=' hover:bg-zinc-700 hover:text-orange-50 p-3 pl-6'> 
                            <a href="#" >Men</a>
                        </li>
                        <li className=' hover:bg-zinc-700 hover:text-orange-50 p-3 pl-6'>
                            <a href="#"  >Women</a>
                        </li>
                        <li className=' hover:bg-zinc-700 hover:text-orange-50 p-3 pl-6'>
                            <a href="#"  >Kids</a>
                        </li >
                        <li className=' hover:bg-zinc-700 hover:text-orange-50 p-3 pl-6'>
                            <a href="#"  >My Favorites</a>
                        </li>

                    </ul>           
        </div>
   </>
  )
}

export default popupMenu