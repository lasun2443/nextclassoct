import { NextRequest, NextResponse, ProxyConfig } from "next/server";
import { auth } from "../app/utils/session"


const publicRoutes = ["/", "/signin", "/signup", "/about", "/ts"]

export default async function proxy (req: NextRequest){
            const path = req.nextUrl.pathname
            const isPublicRoute = publicRoutes.includes(path)
        const{ success } = await auth();
        if(!success){
            return NextResponse.redirect(new URL("/signin", req.nextUrl))
        }
        return NextResponse.next()
}

export const config: ProxyConfig = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']

}

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// const publicRoutes = ["/", "/signin", "/signup", "/about", "/ts"] 

// export function Proxy(request: NextRequest) {

//     const token = request.cookies.get('token')?.value
//     const path = request.nextUrl.pathname
//     const isPublicRoute = publicRoutes.includes(path)

//     if (request.nextUrl.pathname.startsWith('/profile')) {
//         if (!token) {
//             return NextResponse.redirect(new URL('/signin', request.url))
//         }
//     }

//     if (token && (
//         request.nextUrl.pathname.startsWith('/signin') ||
//         request.nextUrl.pathname.startsWith('/signup')
//     )) {
//         return NextResponse.redirect(new URL('/profile', request.url))
//     }

//     return NextResponse.next()
// }

// export const config = {
//     matcher: [
//         '/profile/:path*',
//         '/signin',
//         '/signup'
//     ]
// }