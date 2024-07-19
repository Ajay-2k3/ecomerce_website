'use client';

import React from "react";
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from "next/link";
import { Avatar } from "@mui/material";

export default function UserInfo() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (status === "unauthenticated") {
        return (
            <div className="m-0">
                <Link href="#">
                    <button onClick={() => signIn()} type="button" className='pt-3 pb-4 pl-6 pr-6 font-bold hover:text-white justify-center text-blue-500 flex w-full hover:bg-blue-500 rounded-md'>
                        Sign In
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="m-0">
            {session ? (
                <div className="flex flex-col gap-3">
                    <Avatar  className="self-center bg-black">
                        {session.user.name ? session.user.name[0].toUpperCase() : ""}
                    </Avatar>
                    <div>
                        <h2 className="text-center font-bold text-black">{session.user.name}</h2>
                        <p className="text-center text-gray-600">{session.user.email}</p>
                    </div>
                    <button onClick={() => signOut()} className="text-red-600 hover:text-white hover:bg-red-600 flex w-full rounded-lg justify-center text-center p-3 font-bold">
                        Sign Out
                    </button>
                </div>
            ) : (
                <div className="m-0">
                    <Link href="#">
                        <button onClick={() => signIn()} type="button" className='pt-3 pb-4 pl-6 pr-6 font-bold hover:text-white justify-center text-blue-500 flex w-full hover:bg-blue-500 rounded-md'>
                            Sign In
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
}
