
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

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