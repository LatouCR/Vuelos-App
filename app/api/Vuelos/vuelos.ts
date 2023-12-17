import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(){
  try{
    const vuelos = await db.vuelo.findMany();
    return NextResponse.json(vuelos);
  }catch(error){
    if(error instanceof Error){
      return NextResponse.json(
        {
          message: "No se encontro ningun vuelo",
        },
        {
          status: 101,
        }
      );
    }
  }
}

export async function POST(request: Request) {
  try {
    const body  = await request.json();
     const { id, codigoAerolinea, origenCodigoPais, destinoCodigoPais, codigoPuertaSalida, codigoPuertaLlegada, fechaSalida, estadoVuelo } = body;

    const newVuelo = await db.vuelo.create({
      data: {
        id,
        codigoAerolinea,
        origenCodigoPais,
        destinoCodigoPais,
        codigoPuertaSalida,
        codigoPuertaLlegada,
        fechaSalida,
        estadoVuelo,
      },
    });

    return NextResponse.json(newVuelo);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: "No se pudo crear el vuelo",
        },
        {
          status: 500,
        }
      );
    }
  }
}