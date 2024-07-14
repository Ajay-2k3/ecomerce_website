/* eslint-disable no-unused-vars */
// my-app/app/api/auth/[...nextauth]/route.js

import { connectedToDB } from "@/lib/database";
import User from "@/models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const { email, password, rememberMe } = credentials;

                try {
                    await connectedToDB();
                    const user = await User.findOne({ email });

                    if (!user) {
                        return null; // No user found
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (!passwordsMatch) {
                        return null; // Incorrect password
                    }

                    // Return user object if authentication is successful
                    return { id: user._id, name: user.name, email: user.email, rememberMe };
                } catch (error) {
                    console.log(error);
                    return null; // Authentication failed
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name; 
                token.rememberMe = user.rememberMe;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.name = token.name; 

            if (token.rememberMe) {
                session.expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(); // 30 days
            }
            return session;
        }
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };