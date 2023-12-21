import { NextResponse } from "next/server";
import { db } from "@/lib/db"; 

export async function GET(){
    try{
        const aerolineas = await db.aerolinea.findMany();
        return NextResponse.json(aerolineas);
    }catch(error){
        if(error instanceof Error){
            return NextResponse.json(
                {
                    message: "No se encontro ninguna aerolinea",
                },
                {
                    status: 401,
                }
            );
        }
    }
}


export async function POST(request: Request){
    try{
        const body = await request.json();
        const { id, nombre } = body;

        const newAerolinea = await db.aerolinea.create({
            data: {
                id,
                nombre
            }
        });

        return NextResponse.json(
            { message: "Aerolinea creada exitosamente", newAerolinea },
            { status: 201 }
        )

    }catch(error){
        if(error instanceof Error){
            return NextResponse.json(
                {
                    message: "No se pudo crear la aerolinea",
                },
                {
                    status: 500,
                }
            );
        }
    }
}