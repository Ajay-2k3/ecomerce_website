import React from 'react'

function Navbar() {
  return (
    <div className='flex bg-gold-50 justify-between items-center shadow-sm'>
        <div className='flex  '>
            <div className=' ml-6 flex justify-between gap-1 mr-16' >
                <img src="/logo_big.png" alt="logo" 
                width={50}
                height={50}
                />
                <h1 className=' font-semibold w-8 content-center text-2xl text-stone-950'>Shopzz</h1>
            </div>
            <div className=' flex relative content-center border-b-black  m-3 delay-200'>
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    </div>
                <input type="search" name="search_item" id="search_" placeholder=''
                className='h-9 border-none rounded-lg outline-none placeholder:p-6 placeholder:stroke-slate-300 pl-9 pr-20'
                /> 
                <button type="submit" class=" text-stone-950 absolute -end-0.5  bg-gold-100 hover:bg-gold-200 outline-none  font-medium rounded-r-lg text-sm px-4 py-2 ">Search</button>
            </div>
        </div>
        <div className=' flex'>
            <ul className=' md:flex gap-5 list-none font-semibold hidden text-stone-950 '>
                <li> 
                    <a href="#" className='hover:relative hover:bottom-0.5 '>Home</a>
                    </li>
                <li> 
                    <a href="#" className='hover:relative hover:bottom-0.5'>Men</a>
                    </li>
                <li>
                    <a href="#" className='hover:relative hover:bottom-0.5'>Women</a>
                </li>
                <li>
                    <a href="#" className='hover:relative hover:bottom-0.5'>Kids</a>
                </li>
            </ul>           
        </div>

        <div className=' flex  justify-between gap-9 items-center'>
            <button type="button" className=' text-stone-950 border-stone-950 border-solid p-2 border-2 rounded-3xl pl-6 pr-6 font-bold hover:relative hover:bottom-0.5'>Login</button>
            <div className=' mr-6 flex items-center gap-9 justify-between '>
                <svg class="h-8 w-8 text-red-500 hover:fill-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >  <path className=' hover:bg-red-500' d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                <img src="/shoppingcart.svg" alt="cart" 
                className=' w-8 h8'/>    
            </div>    
        </div>

    </div>
  )
}

export default Navbar