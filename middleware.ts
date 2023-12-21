import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(request: NextRequestWithAuth) {


        if (request.nextUrl.pathname.startsWith("/dashboard")
            && request.nextauth.token?.role !== "Admin"
            && request.nextauth.token?.role !== "manager") {
            return NextResponse.rewrite(
                new URL("/denied", request.url)
            )
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

export const config = { matcher: ["/viajes", "/dashboard", "/reservation"] }