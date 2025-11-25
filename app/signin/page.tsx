// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function SignInPage() {
//     const handleSignIn = (e: React.FormEvent) => {
//         e.preventDefault();
//         setLoading(true);
//     };
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//             <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
//                 <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

//                 <form onSubmit={handleSignIn} className="space-y-4">
//                     <div>
//                         <label className="block text-sm mb-1">Email</label>
//                         <input
//                             type="email"
//                             className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                             placeholder="Enter your email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label className="block text-sm mb-1">Password</label>
//                         <input
//                             type="password"
//                             className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                             placeholder="Enter your password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//                     >
//                         {loading ? "Signing in..." : "Sign In"}
//                     </button>
//                 </form>

//                 <p className="text-sm text-center mt-4">
//                     Don't have an account?{" "}
//                     <Link href="/signup" className="text-blue-600 hover:underline">
//                         Sign Up
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// }


"use client"
import React, { ChangeEvent } from 'react'
import { signIn, } from '../utils/action'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const page = () => {
    const [user, setUser] = React.useState({
        email: '',
        password: ''
    });

    const router = useRouter();

    const handleSignin = async () => {


        // Handle signin logic here
        const response = await signIn(user)
        if (response.success) {
            alert(response.message || "User logged in successfully")
        } else {
            alert(response.message || "Something went wrong")
        }

        router.push("/profile")
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        const updatedUser = { ...user, [name]: value };
        setUser(updatedUser);
    }


    return (
        <div className='flex items bg-gray-100 justify-center h-screen'>
            <div className='w-full max-w-lg bg-white rounded-lg p-6'>
                <h3 className='text-2xl font-bold mb-6 text-center text-gray-900'>
                    Sign In Page for NextJS class

                </h3>
                <div className='flex flex-col gap-4 w-full'>
                   




                    <input onChange={handleInput} name="email" type='email' placeholder='Email' className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <input onChange={handleInput} name="password" type='password' placeholder='Password' className='border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <button onClick={handleSignin} className='bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition'>
                        Submit
                    </button>

                    <Link href="/signin" className="text-blue-600 hover:underline">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page