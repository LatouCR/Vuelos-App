import { NextResponse } from "next/server";
import { db } from "@/lib/db"; 

export async function GET(){
    try{
        const puertas = await db.puertaAeropuerto.findMany();
        return NextResponse.json(puertas);
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
        const { numero, detalle, estado } = body;

        const newPuerta = await db.puertaAeropuerto.create({
            data: {
                numero,
                detalle,
                estado            
            }
        });

        return NextResponse.json(
            { message: "Aerolinea creada exitosamente", newPuerta },
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