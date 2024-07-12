/* eslint-disable no-const-assign */

'use client';

import React,{ useState } from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

function createAccount() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');  
    const [password,setPassword] = useState('');
    const [error,seterror] = useState('');

    const route =useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!name || !email || !password){
            seterror("All fields are necessary ")
        }
        
        try{

            const resExist =await fetch("api/userExist",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( {email}), } 
            );

            const {user} =await resExist.json();

            if(user){
                seterror("User already exists.");
                return;
            }

            if(user){
                seterror("User already exists");
            }

           const res = await fetch('api/register',{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            if (res.ok){
                const form = e.target;
                form.reset();
                route.push("/")
            }
            else{
                console.log("User registration fail");
            }
        }catch (error){
            console.log("error during registration :",error);
        }
    };

    console.log(name,email);


  return (
    <>
    <div className=' flex fixed justify-center items-center content-center min-h-screen w-screen flex-1 bg-gray-200 px-20 max-md:px-2'>
        <div className='w-2/3 text-center max-w-4xl max-sm:w-3/4 max-md:w-3/5 bg-white rounded-2xl flex shadow-2xl shadow-gray-700  '>
            <div className='w-3/5 max-lg:w-full text-black py-12 max-md:py-6 max-md:px-1 px-4 flex order-2 flex-col items-center content-center'>
                <h1 className=' text-orange-500 text-3xl font-bold mb-4 max-md:text-medium/7 '>Create Account</h1>
                <div className=' border-2 rounded-full w-16 border-orange-500 inline-block max-md:w-8 mb-9'></div>
                
                <form action="#" onSubmit={handleSubmit} method="get" className=' flex flex-col max-lg:w-4/5 items-center max-md:text-sm'>
                            
                            <div id='input-box' className=' flex flex-col gap-2 max-md:w-5/6'>
                                <label  className='self-start relative text-lg font-bold max-md:text-sm '>Name</label>
                                <input onChange={ (e) => setName(e.target.value)} type="text"  value={name} className='  relative border-b-stone-950  border-b-medium  border-r-0 outline-none pr-8'/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user relative bottom-9 self-end max-md:w-2/12"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>  
                            </div>
                            <div id='input-box' className=' flex flex-col gap-2 max-md:w-5/6'>
                                <label className='self-start  relative text-lg font-bold max-md:text-sm'>Email</label>
                                <input onChange={e => setEmail(e.target.value)} type="email"   className='  relative border-b-stone-950  border-b-medium  border-r-0 outline-none pr-8'/>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail relative self-end bottom-9 max-md:w-2/12"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>                    
                            </div>
                            <div id=' input-box' className=' flex flex-col  gap-2 mb-0 max-md:w-5/6'>
                                <label className=' self-start relative text-lg font-bold max-md:text-sm'  >Password</label>
                                <input type="password" onChange={ (e) => setPassword(e.target.value)} id="userPassword" className=' relative border-b-stone-950  border-b-medium  border-r-0 outline-none pr-9 required ' />
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock relative self-end bottom-9 max-md:w-2/12"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                            </div>
                            <div className='flex justify-between gap-4 items-center mb-6 max-md:w-5/6'>
                                <div className='flex justify-center items-center'>
                                    <input type="checkbox" name="remember" id="rememberMe" /> <label htmlFor="remmber" className=' max-md:text-[10px] text-[12px] font-extrabold ' >I agree to the all terms & condition</label>
                                </div>
                            </div>
                            <div className='flex w-3/4 justify-center items-center max-md:w-5/6'>
                                <Button type='submit' className=' flex rounded-full w-full bg-orange-500 text-white font-bold'>Sign UP</Button>
                            </div>
                            <div className='text-[10px] flex gap-3 mt-6 font-bold lg:hidden'>
                                <p>Already have an Account </p> <Link href="/login" className=' text-blue-700'> Sign In</Link>
                            </div>
                            {error && <div className= 'bg-red-600 px-3 rounded-full text-white py-1 my-3'>
                                 {error} !
                            </div>
                            }
                </form>

            </div>
            <div className=' ease-linear origin-right delay-700 w-2/5 bg-orange-500 rounded-bl-2xl rounded-tl-2xl order-1 text-center py-36 px-12 max-lg:hidden max-lg:scale-0 flex flex-col items-center justify-center'>
                <div>
                    <h2 className='text-3xl font-bold mb2'>Welcome Back!</h2>
                    <div className=' border-2 w-10 border-white inline-block'></div>
                    <p className='mb-10'>To keep with us please login with your personal info</p>
                    <Link href="/login" className='border-2 border-white rounded-full px-12 py-2 inline-block font-bold hover:bg-white hover:text-orange-500'>Sign In</Link>            
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default createAccount