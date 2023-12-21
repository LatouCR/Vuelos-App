import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export const config = { matcher: ["/viajes", "/dashboard"] }