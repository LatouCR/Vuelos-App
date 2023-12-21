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

const Cronograma: React.FC = () => {

  const [vuelos, setVuelos] = useState<Vuelo[]>([]);
  const [mostrarLlegadas, setMostrarLlegadas] = useState<boolean>(true);


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

    fetchData();
  }, []);

  const destinoCodigoPais = (destinoCodigoPais: String) => {
    switch (destinoCodigoPais) {
      case "AP-01":
        return <p>New York City (JFK)</p>;
      case "AP-02":
        return <p>Los Angeles (LAX)</p>;
      case "AP-03":
        return <p>Tokyo (HND)</p>;
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
        return null;

    }
  };

  const codigoAerolinea = (codigoAerolinea: string) => {
    switch (codigoAerolinea) {
      case "AER-01":
        return <p>American Airlines</p>;
      case "AER-02":
        return <p>Copa Airlines</p>;
      case "AER-03":
        return <p>SkyJet Airways</p>;
      case "AER-04":
        return <p>Quantum Airways</p>;
      case "AER-05":
        return <p>Qatar Airways</p>;
      case "AER-06":
        return <p>Spirit Airlines</p>;
      case "AER-07":
        return <p>JetBlue Airways</p>;
      case "AER-08":
        return <p>PacificExpress</p>;
      default:
        return null;
    }
  };

  const origenCodigoPaisRenderer = (origenCodigoPais: String) => {
    switch (origenCodigoPais) {
      case "AP-01":
        return <p>New York City (JFK)</p>;
      case "AP-02":
        return <p>Los Angeles (LAX)</p>;
      case "AP-03":
        return <p>Tokyo (HND)</p>;
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

  const vuelosAMostrar = mostrarLlegadas ? vuelos.filter(vuelo => vuelo.destinoCodigoPais) : vuelos.filter(vuelo => vuelo.origenCodigoPais);

  return (
    <main className="bg-background h-screen">
      <div className="mx-auto max-w-screen-xl justify-center items-center ">
        <div className="flex justify-center items-center">
          <button onClick={() => setMostrarLlegadas(true)} className="bg-accent rounded-t-md border border-white px-10 py-3 inline-flex items-center gap-4">
            <img src="imagenes\landing.svg" alt="" className="w-10 h-10" />
            Ver Llegadas
          </button>
          <button onClick={() => setMostrarLlegadas(false)} className="bg-accent rounded-t-md border border-white px-10 py-3 inline-flex items-center gap-4">
            <img src="imagenes\takeoff.svg" alt="" className="w-10 h-10"/>
            Ver Salidas
          </button>
        </div>
        <table className="table-auto w-full my-4">
          <thead className=" bg-slate-200 font-semibold text-text">
            <tr>
              <th>Vuelo</th>
              <th>Aerolínea</th>
              {mostrarLlegadas ? <th>Origen</th> : <th>Destino</th>}
              <th>Fecha Salida</th>
              <th>Fecha Llegada</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody className="text-text text-center">
            {vuelosAMostrar.map((vuelo) => (
              <tr key={vuelo.id}>
                <td className="border">{vuelo.id}</td>
                <td className="border">{codigoAerolinea(vuelo.codigoAerolinea)}</td>
                <td className="border">{mostrarLlegadas ? origenCodigoPaisRenderer(vuelo.origenCodigoPais) : destinoCodigoPais(vuelo.destinoCodigoPais)}</td>
                <td className="border">{new Date(vuelo.fechaLlegada).getHours()}:{new Date(vuelo.fechaLlegada).getMinutes()}</td>
                <td className="border">{new Date(vuelo.fechaSalida).getHours()}:{new Date(vuelo.fechaSalida).getMinutes()}</td>
                <td className="border">{vuelo.estadoVuelo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Cronograma;
