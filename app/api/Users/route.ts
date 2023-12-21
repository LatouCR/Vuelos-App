
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { string } from "zod";

export async function GET(){
    try{
      const users = await db.user.findMany();
      return NextResponse.json(users);
    }catch(error){
      if(error instanceof Error){
        return NextResponse.json(
          {
            message: "No se encontro ningun usario",
          },
          {
            status: 401,
          }
        );
      }
    }
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json(); // Assuming 'id' is in the request body
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        // Add other fields you want to select
      }
    });
    return NextResponse.json(user);
  } catch (error) {
    console.error('Error in GET_ID:', error);
    return NextResponse.json(
      { message: 'Could not get user' },
      { status: 401 }
    );
  } 
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, role } = body;

    console.log('Updating user role:', { id, role });

    const updateRole = await db.user.update({
      where: { id: id },
      data: { role: role },
    });

    console.log('User role updated successfully:', updateRole);

    return NextResponse.json({ message: 'User role updated successfully' });
  } catch (error) {
    console.error('Error updating user role:', error);

    return NextResponse.json(
      { message: 'Could not update user role' },
      { status: 401 }
    );
  }
}