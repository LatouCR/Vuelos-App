"use client"
import Link from "next/link"
import { useEffect, useState } from "react";

type Vuelo = {
  id: number;
  codigoAerolinea: string;
  origenCodigoPais: string;
  destinoCodigoPais: string;
  fechaSalida: Date;
  precioVuelo: number;
};


export default function Home() {

  const [vuelos, setVuelos] = useState<Vuelo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/Vuelos', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setVuelos(data);
          console.table(data);
        } else {
          console.error('Error al obtener los vuelos', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener los vuelos', error);
      }
    };

    fetchData();
  }, []);


  return (
    <main className="bg-background">
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Resumen de Reserva</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              {vuelos.map((vuelo) => (
                <div key={vuelo.id} className="mb-6 sm:mb-0">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-700">{vuelo.codigoAerolinea}</p>
                    <p className="text-gray-700">{vuelo.precioVuelo}</p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-700">{vuelo.origenCodigoPais}</p>
                    <p className="text-gray-700">{vuelo.destinoCodigoPais}</p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-700">{new Date(vuelo.fechaSalida).getDate()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700"></p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
          </div>
        </div>
      </div>
    </main>
  )
}
