'use client';
import Link from "next/link";
import { useEffect, useState } from 'react';
import Search from "../components/Search/Search";


type Vuelo = {
  id: number;
  codigoAerolinea: string;
  origenCodigoPais: string;
  destinoCodigoPais: string;
  codigoPuertaSalida: number;
  codigoPuertaLlegada: number;
  fechaSalida: Date;
  fechaLlegada: Date;
  estadoVuelo: string;
  precioVuelo: number;
};


const Vuelos = () => {

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
          console.table(data); // Log flight data in console
        } else {
          console.error('Error al obtener los vuelos', response.statusText);
        }
      } catch (error) {
        console.error('Error al obtener los vuelos', error);
      }
    };

    fetchData(); // Invoke fetchData on component mount
  }, []);

  const destinoCodigoPais = (destinoCodigoPais: String) => {
    switch (destinoCodigoPais) {
      case "AP-01":
        return <p><strong>Destino:</strong> New York City (JFK)</p>;//Añadir el codigo del pais
      case "AP-02":
        return <p><strong>Destino:</strong> Los Angeles (LAX)</p>;
      // Add cases for values 3 to 10
      // Example:
      case "AP-03":
        return <p><strong>Destino:</strong> Tokyo (HND)</p>;
      // ... Repeat for values 4 to 10
      case "AP-04":
        return <p><strong>Destino:</strong> San Jose (SJO)</p>;
      default:
        return null; // Render nothing for other values
    }
  };

  const origenCodigoPaisRenderer = (origenCodigoPais: String) => {
    switch (origenCodigoPais) {
      case "AP-01":
        return <p><strong>Origen:</strong> New York City (JFK)</p>;//Añadir el codigo del pais
      case "AP-02":
        return <p><strong>Origen:</strong> Los Angeles (LAX)</p>;
      // Add cases for values 3 to 10
      // Example:
      case "AP-03":
        return <p><strong>Origen:</strong> Tokyo (HND)</p>;
      // ... Repeat for values 4 to 10
      case "AP-04":
        return <p><strong>Origen:</strong> San Jose (SJO)</p>;
      default:
        return null; // Render nothing for other values
    }
  };

  const codigoAerolinea = (codigoAerolinea: string) => {
    switch (codigoAerolinea) {
      case "AER-01":
        return <img src="\imagenes\AE1.png" alt="" className="w-[128px] mt-4"/>
    }
  };

  return (
    <main className="bg-background">
      <div className="w-screen bg-background-2">
        <div className="py-8 mx-auto max-w-screen-xl">
          <h3 className="m-0 font-bold h-4 text-xl text-white">
            ¿A dónde quieres volar?
          </h3>
        </div>
      </div>

      {/*Form Vuelos */}
      <Search />


      <div className="mx-auto max-w-screen-xl">
        {/* Mostrar la lista de vuelos */}
        {vuelos.map((vuelo) => (
          <div key={vuelo.id} className="my-6 px-4 pt-4 border rounded-xl text-text text-xl bg-white shadow-md shadow-primary/30">
            <div className="flex justify-between">
              <div className="text-lg max-w-xs w-full">
                {origenCodigoPaisRenderer(vuelo.origenCodigoPais)}
                {destinoCodigoPais(vuelo.destinoCodigoPais)}
                {codigoAerolinea(vuelo.codigoAerolinea)}

              </div>

              <div className="text-lg max-w-xs w-full">
                <p><strong>Salida: </strong>{new Date(vuelo.fechaSalida).toLocaleString()}</p>
                <p><strong>Llegada:</strong> {new Date(vuelo.fechaLlegada).toLocaleString()}</p>
              </div>

              <div className="flex justify-center items-center flex-col">
                <p className="text-3xl">${vuelo.precioVuelo}</p>
                <p className="text-xs">Por pasajero.</p>
                {/* "Ver Oferta"" */}
                <div className="py-3">
                  <Link href={`/ofertas/${vuelo.id}`} className="text-white bg-gray-100 font-bold hover:bg-accent focus:ring-4 focus:outline-none focus:ring-white rounded-full text-sm px-6 py-2 text-center inline-flex items-center">
                    Ver Oferta
                  </Link>
                </div>

              </div>


            </div>

            <div className="border-t-2 text-sm">
              <p className="py-2 flex justify-start items-center">Sin cargos por cambios • Seleccion de asiento incluida</p>
            </div>
          </div>
        ))}

        <div className="p-6">

        </div>
      </div>
    </main>


  );
};

export default Vuelos;