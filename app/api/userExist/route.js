// my-app/app/api/userExist/route.js

import { connectedToDB } from "@/lib/database";
import { NextResponse } from "next/server";
import User from "@/models/user";

export async function POST(Request) {
    try {
        await connectedToDB();
        
        const { email } = await Request.json();
        const user = await User.findOne({ email }).select("_id");
        
        console.log("user: ", user);
        return NextResponse.json({ user });
    } catch (error) {
        console.log("An error occurred while checking if the user exists:", error);
        return NextResponse.json({ error: "An error occurred while checking if the user exists" }, { status: 500 });
    }
}
