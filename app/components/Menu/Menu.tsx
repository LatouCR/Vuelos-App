"use client"
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import router from 'next/router';

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

type PopupProps = {
    vuelo: Vuelo;
    onClose: () => void;
    addToCartAndClosePopup: (vuelo: Vuelo) => void;
};

const Menu: React.FC<PopupProps> = ({ vuelo, onClose, addToCartAndClosePopup }) => {
    const [open, setOpen] = useState(true);

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

    const AERender = (codigoAerolinea: string) => {
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
                return <p>Avianca</p>;
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

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">Revisar Viaje</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={onClose}
                                                    >
                                                        <span className="absolute -inset-0.5" />
                                                        <span className="sr-only">Cerrar Ventana</span>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                        <li key={vuelo.id} className="flex py-6">
                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>Vuelo Ida</h3>
                                                                        <p className="ml-4">${vuelo.precioVuelo}</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">
                                                                        Fecha: {new Date(vuelo.fechaSalida).getDay()} de {new Date(vuelo.fechaSalida).getMonth()} de {new Date(vuelo.fechaSalida).getFullYear()}
                                                                    </p>
                                                                    
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">{origenRenderer(vuelo.origenCodigoPais)} a {destinoRender(vuelo.destinoCodigoPais)}</p>
                                                                    <p className="text-text">{AERender(vuelo.codigoAerolinea)}</p>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>${vuelo.precioVuelo}</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">Impuestos y servicios calculados al momento de la compra.</p>
                                            <div className="mt-6">
                                                <Link
                                                    href={{
                                                        pathname: '/reservation',
                                                        query: { cart: JSON.stringify(vuelo) }, // Serialize the vuelo data
                                                    
                                                    }}
                                                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                    onClick={() => {addToCartAndClosePopup(vuelo);}}
                                                >
                                                    Reservar
                                                </Link>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    O
                                                    <button
                                                        type="button"
                                                        className="pl-2 font-medium text-indigo-600 hover:text-indigo-500"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        Continuar Viendo
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Menu;