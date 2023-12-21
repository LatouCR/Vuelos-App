

import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, username, name, password } = body;
    
    //check if email exists
    const existingUserbyEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUserbyEmail) {
      return NextResponse.json(
        { user: null, message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}