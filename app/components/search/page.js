import React from 'react'

function page() {
  return (
    <div>            
        <div className=' relative  border-slate-50 sm:hidden ml-28 max-md:ml-1 mr-5 max-md:mr-3 self-center'>
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
  )
}

export default page