/* eslint-disable no-unused-vars */
import  { NextResponse } from "next/server";
import { connectedToDB } from "@/lib/database"
import User from "@/models/user";
import bcrypt from "bcryptjs"

export async function POST(req){
    try{
        const { name,email,password } = await req.json();
        const hashedPassword = await bcrypt.hash(password,10)
        await connectedToDB();
        await User.create({name,email,password : hashedPassword,agree});

        return NextResponse.json({message : "User registered."},{status:201});
    }
    catch(error){
        return NextResponse.json(
            {
                message: "An error occurred while registering the user."
            },{status:500}
        );
    }
} 