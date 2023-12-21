import { NextResponse } from "next/server";
import { db } from "@/lib/db"; 

export async function GET(){
    try{
        const compra = await db.compra.findMany();
        return NextResponse.json(compra);
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
        const { nombre, reserva, precioCompra } = body;

        const newPuerta = await db.compra.create({
            data: {
                nombreUser: nombre,
                reserva,
                precioCompra
            }
        });

        return NextResponse.json(
            { message: "Compra registrara exitosamente", newPuerta },
            { status: 201 }
        )

    }catch(error){
        if(error instanceof Error){
            return NextResponse.json(
                {
                    message: "No se pudo realizar la compra",
                },
                {
                    status: 500,
                }
            );
        }
    }
}