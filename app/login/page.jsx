'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await signIn("credentials", {
                email,
                password,
                rememberMe,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid Credentials");
                return;
            }
        } catch (error) {
            console.error("Error during sign in:", error);
            setError("An error occurred. Please try again.");
        }
    };

    useEffect(() => {
        if (status === "authenticated") {
            router.replace("/"); // Use replace instead of push to prevent navigation history clutter
        }
    }, [status, router]);

    return (
        <div className="flex fixed justify-center items-center content-center min-h-screen w-screen flex-1 bg-gray-200 px-20 max-md:px-2 translate-x-2 transition-transform">
            <div className="w-2/3 text-center max-w-4xl max-sm:w-4/5 max-md:w-2/3 bg-white rounded-2xl flex shadow-2xl shadow-slate-600">
                <div className="w-3/5 max-lg:w-full text-black max-md:py-8 py-16 max-md:px-4 px-12 flex flex-col items-center content-center">
                    <h1 className="text-orange-500 text-3xl font-bold mb-4 max-md:text-medium/7">Sign in to Account</h1>
                    <div className="border-2 rounded-full w-16 max-md:w-8 border-orange-500 inline-block mb-9"></div>

                    <form onSubmit={handleSubmit} className="flex flex-col max-lg:w-4/5 items-center max-md:text-sm">
                        <div className="flex flex-col gap-2 max-md:w-5/6">
                            <label htmlFor="email" className="self-start relative text-lg font-bold max-md:text-sm">Email</label>
                            <input 
                                onChange={e => setEmail(e.target.value)} 
                                value={email} // Add value to input for controlled component
                                type="email" 
                                id="email" 
                                name="email" 
                                className="relative border-b-stone-950 border-b-medium border-r-0 outline-none pr-8" 
                                required 
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail relative self-end bottom-9 max-md:w-2/12"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>                    
                        </div>
                        <div className="flex flex-col gap-2 mb-0 max-md:w-5/6">
                            <label htmlFor="password" className="self-start relative text-lg font-bold max-md:text-sm">Password</label>
                            <input 
                                onChange={e => setPassword(e.target.value)} 
                                value={password} // Add value to input for controlled component
                                type="password" 
                                id="password" 
                                name="password" 
                                className="relative border-b-stone-950 border-b-medium border-r-0 outline-none pr-9" 
                                required 
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock relative self-end bottom-9 max-md:w-2/12"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        </div>
                        <div className="flex justify-between gap-4 items-center mb-6">
                            <div className="flex justify-center items-center">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label htmlFor="rememberMe" className="text-[12px] font-extrabold max-md:text-[10px]"> Remember Me</label>
                            </div>
                            <span>
                                <a href="#" className="text-[12px] hover:text-blue-700 font-bold max-md:text-[10px] relative bottom-1"> Forgot Password ?</a>
                            </span>
                        </div>
                        <div className="flex w-3/4 justify-center items-center max-md:w-5/6">
                            <Button type="submit" className="flex rounded-full w-full bg-orange-500 text-white font-bold">Sign in</Button>
                        </div>
                        <div className="text-[10px] flex gap-3 mt-6 font-bold lg:hidden">
                            <p>Create an Account</p> <Link href="/createAccount" className="text-blue-700">Sign Up Now</Link>
                        </div>
                        {error && (
                            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                                {error}
                            </div>
                        )}
                    </form>
                </div>
                <div className="w-2/5 bg-orange-500 rounded-br-2xl rounded-tr-2xl text-center py-36 px-12 max-lg:hidden max-lg:scale-0 flex flex-col items-center justify-center">
                    <div>
                        <h2 className="text-3xl font-bold mb2">Hello, Friend!</h2>
                        <div className="border-2 w-10 border-white inline-block"></div>
                        <p className="mb-10">Fill up personal information and start your journey with us.</p>
                        <Link href="/createAccount" className="border-2 border-white rounded-full px-12 py-2 inline-block font-bold hover:bg-white hover:text-orange-500">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
