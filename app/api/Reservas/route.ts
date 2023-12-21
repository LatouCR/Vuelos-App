import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const reservas = await db.reserva.findMany();
        return NextResponse.json(reservas);
    }catch(error){
        if(error instanceof Error){
            return NextResponse.json(
                {
                    message: "No se encontro ninguna reserva",
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
    const body = await req.json();

    const { userId, vueloId, precioReserva } = body;

    const newReserva = await db.reserva.create({
      data: {
        userId,
        vueloId,
        precioReserva
      },
    });

    return NextResponse.json({
        message: "Reserva creada correctamente",
        newReserva,
        status: 201,
      });

  } catch (error) {
    return NextResponse.json(
      { message: "No se pudo realizar la reserva" },
      { status: 500 }
    );
  }
}
