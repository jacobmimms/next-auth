'use client'
import { signOut, signIn } from "next-auth/react";
export default function Header() {
    return (
        <div className="bg-red-500">
            <div className="flex items-center bg-red-500">
                <button onClick={() => signIn('google')}>Sign in</button>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        </div>
    )
}