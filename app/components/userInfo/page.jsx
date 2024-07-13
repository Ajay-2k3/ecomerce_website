'use client'

import React from "react"
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from "next/link";
import { Avatar } from "@mui/material";


export default function userInfo(){
    const { data: session } = useSession();
    return (
        <div className="m-0">
        {session ? (
          <div className="flex flex-col gap-3 ">
            <Avatar className=" self-center"></Avatar>
            <button onClick={() => signOut()} className="text-red-600 hover:text-white hover:bg-red-600 flex w-full rounded-lg justify-center text-center p-3 font-bold">Sign Out</button>
        </div>
        ) : (
          <>
            <Link href="#">
            <button onClick={() => signIn()} type="button" className=' pt-3 pb-4  pl-6 pr-6 font-bold  hover:text-white justify-center  text-blue-500 flex w-full hover:bg-blue-500 rounded-md'>Sign In</button>
            </Link>  
         </>
        )}
        </div> 
    )
}