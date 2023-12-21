"use client"
import Link from "next/link"
import { useEffect, useState } from "react";

type Reserva = {
  id: string;
  useId: string;
  vueloId: string;
  precioReserva: number;
  createdAt: Date;
};


export default function Home() {

  const [Reservas, setVuelos] = useState<Reserva[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/Reservas', {
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
        <h1 className="mb-10 text-center text-2xl font-bold text-primary">Resumen de Reserva</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          {Reservas.map((Reservas) => (
            <>
              <div className="rounded-lg md:w-2/3">
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">

                  <div key={Reservas.id} className="mb-6 sm:mb-0 text-text">
                    <div className="mt-8 space-y-3 rounded-lg border bg-slate-100 px-2 py-4 sm:px-6">
                      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-2 h-24 w-28 rounded-md border object-cover object-center text-secondary">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                        </svg>
                        <div className="flex px-4 py-4 text-text">
                          <span className="font-semibold">Vuelo Ida.</span>
                          <span className="float-right text-gray-400"></span>
                        </div>
                        <div className="flex px-4 py-4 text-text">
                          <span className="font-semibold text-white">Vuelo Ida.</span>
                          <p className="text-gray-700">Reservado el: {new Date(Reservas.createdAt).toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="border-t-2 text-sm">
                        <p className="py-2 flex justify-start items-center">Sin cargos por cambios • Seleccion de asiento incluida</p>
                      </div>

                    </div>
                  </div>




                </div>
              </div>
              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Total:</p>
                  <p className="text-gray-700">${Reservas.precioReserva}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Impuestos</p>
                  <p className="text-gray-700">$0.00</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-text">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold">${Reservas.precioReserva}</p>
                    <p className="text-sm text-gray-700">Incluye I.V.A</p>
                  </div>
                </div>
                <Link href="/checkout" className="justify-center flex mt-8 w-full rounded-md bg-blue-500 py-1.5 px-8 font-medium text-blue-50 hover:bg-blue-600">Check out</Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </main>
  )
}
