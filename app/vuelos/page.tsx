'use client';
import Link from "next/link";
import { useEffect, useState } from 'react';
import Search from "../components/Search/Search";
import Menu from "../components/Menu/Menu";


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
  const [cart, setCart] = useState<Vuelo[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<Vuelo | null>(null);


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

  const destinoRender = (destinoCodigoPais: String) => {
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

  const origenRenderer = (origenCodigoPais: String) => {
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

  const codigoAerolinea = (codigoAerolinea: string) => {
    switch (codigoAerolinea) {
      case "AER-01":
        return <img src="\imagenes\AE1.png" alt="" className="w-[128px] mt-4" />
      case "AER-02":
        return <img src="\imagenes\AE2.svg" alt="" className="w-[80px] mt-4" />
      case "AER-03":
        return <img src="\imagenes\AE3.svg" alt="" className="w-[128px] mt-4" />
      case "AER-04":
        return <img src="\imagenes\AE4.png" alt="" className="w-[128px] mt-4" />
      case "AER-05":
        return <img src="\imagenes\AE5.png" alt="" className="w-[60px] mt-4" />
      case "AER-06":
        return <img src="\imagenes\AE6.png" alt="" className="w-[128px] mt-4" />
      case "AER-07":
        return <img src="\imagenes\AE7.png" alt="" className="w-[128px] mt-4" />
      case "AER-08":
        return <img src="\imagenes\AE8.png" alt="" className="w-[80px] mt-4" />
    }
  };

  const addToCart = (vuelo: Vuelo) => {
    setCart((prevCart) => [...prevCart, vuelo]);
  };

  const addToCartAndClosePopup = (vuelo: Vuelo) => {
    addToCart(vuelo); // Assuming addToCart is a function to add to the cart
    closePopup();
  };

  const openPopup = (vuelo: Vuelo) => {
    setSelectedFlight(vuelo);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedFlight(null);
    setShowPopup(false);
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
                {origenRenderer(vuelo.origenCodigoPais)}
                {destinoRender(vuelo.destinoCodigoPais)}
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
                  <button className="text-white bg-gray-100 font-bold hover:bg-accent focus:ring-4 focus:outline-none focus:ring-white rounded-full text-sm px-6 py-2 text-center inline-flex items-center"
                    onClick={() => openPopup(vuelo)} >
                    Ver Oferta
                  </button>
                </div>

              </div>


            </div>

            <div className="border-t-2 text-sm">
              <p className="py-2 flex justify-start items-center">Sin cargos por cambios • Seleccion de asiento incluida</p>
            </div>
          </div>
        ))}

        <div className="p-6">
          {showPopup && selectedFlight && (
            <Menu
              vuelo={selectedFlight}
              onClose={closePopup}
              addToCartAndClosePopup={addToCartAndClosePopup}
            />
          )}
        </div>
      </div>
    </main>


  );
};

export default Vuelos;