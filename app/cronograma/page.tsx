'use client';
import Link from "next/link";
import { useEffect, useState } from 'react';

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
        return <p>New York City (JFK)</p>;//Añadir el codigo del pais
      case "AP-02":
        return <p>Los Angeles (LAX)</p>;
      // Add cases for values 3 to 10
      // Example:
      case "AP-03":
        return <p>Tokyo (HND)</p>;
      // ... Repeat for values 4 to 10
      case "AP-04":
        return <p>London (LHR)</p>;
      case "AP-05":
        return <p>Paris (CDG)</p>;
      case "AP-06":
        return <p>Beijing (PEK)</p>;
      case "AP-07":
        return <p>Dubai (DXB)</p>;
      case "AP-08":
        return <p>Toronto (YYZ)</p>;
      case "AP-09":
        return <p>Panama City (PTY)</p>;
      case "AP-10":
        return <p>San Jose (SJO)</p>;
      case "AP-11":
        return <p>Rio de Janeiro (GIG)</p>;
      case "AP-12":
        return <p>Miami (MIA)</p>;
      case "AP-13":
        return <p>Seoul (ICN)</p>;
      case "AP-14":
        return <p>Vancouver (YVR)</p>;
      case "AP-15":
        return <p>Moscow (SVO)</p>;

      default:
        return null; // Render nothing for other values

    }
  };

  const codigoAerolinea = (codigoAerolinea: string) => {
    switch (codigoAerolinea) {
      case "AER-01":
        return <p>American Airlines</p>;
    }
  };

  const origenCodigoPaisRenderer = (origenCodigoPais: String) => {
    switch (origenCodigoPais) {
      case "AP-01":
        return <p>New York City (JFK)</p>;//Añadir el codigo del pais
      case "AP-02":
        return <p>Los Angeles (LAX)</p>;
      // Add cases for values 3 to 10
      // Example:
      case "AP-03":
        return <p>Tokyo (HND)</p>;
      // ... Repeat for values 4 to 10
      case "AP-04":
        return <p>London (LHR)</p>;
      case "AP-05":
        return <p>Paris (CDG)</p>;
      case "AP-06":
        return <p>Beijing (PEK)</p>;
      case "AP-07":
        return <p>Dubai (DXB)</p>;
      case "AP-08":
        return <p>Toronto (YYZ)</p>;
      case "AP-09":
        return <p>Panama City (PTY)</p>;
      case "AP-10":
        return <p>San Jose (SJO)</p>;
      case "AP-11":
        return <p>Rio de Janeiro (GIG)</p>;
      case "AP-12":
        return <p>Miami (MIA)</p>;
      case "AP-13":
        return <p>Seoul (ICN)</p>;
      case "AP-14":
        return <p>Vancouver (YVR)</p>;
      case "AP-15":
        return <p>Moscow (SVO)</p>;



      default:
        return null; // Render nothing for other values
    }
  };

  return (
    <main className="bg-background h-screen">
      <div className="mx-auto max-w-screen-xl">
        <table className="table-auto w-full my-4">
          <thead className=" bg-slate-200 font-semibold text-text">
            <tr>
              <th>Vuelo</th>
              <th>Aerolínea</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Fecha Salida</th>
              <th>Fecha Llegada</th>
              <th>Estado</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody className="text-text text-center">
            {vuelos.map((vuelo) => (
              <tr key={vuelo.id}>
                <td className="border">{vuelo.id}</td>
                <td className="border">{origenCodigoPaisRenderer(vuelo.origenCodigoPais)}</td>  
                <td className="border">{destinoCodigoPais(vuelo.destinoCodigoPais)}</td>
                <td className="border">{vuelo.destinoCodigoPais}</td>
                <td className="border">{new Date(vuelo.fechaLlegada).getHours()}:{new Date(vuelo.fechaLlegada).getMinutes()}</td>
                <td className="border">{new Date(vuelo.fechaSalida).getHours()}:{new Date(vuelo.fechaSalida).getMinutes()}</td>
                <td className="border">{vuelo.estadoVuelo}</td>
                <td className="border">${vuelo.precioVuelo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>

  );
};

export default Vuelos;