import { NextResponse } from "next/server";
import { db } from "@/lib/db"; 

export async function GET(){
    try{
        const pais = await db.pais.findMany();
        return NextResponse.json(pais);
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
        const { nombre, id } = body;

        const newPais = await db.pais.create({
            data: {
                pais_Nombre: nombre,
                paisID: id
            }
        });

        return NextResponse.json(
            { message: "Pais creado exitosamente", newPais },
            { status: 201 }
        )

    }catch(error){
        if(error instanceof Error){
            return NextResponse.json(
                {
                    message: "No se pudo crear el pais",
                },
                {
                    status: 500,
                }
            );
        }
    }
}