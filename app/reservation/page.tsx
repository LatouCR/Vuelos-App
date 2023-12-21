"use client"
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import ShopNav from "../components/ShopNav/ShopNav";
import Link from 'next/link';

type FormValues = {
    email: string;
    userId: string;
    vueloId: string;
    precioReserva: string;
}

const ReservationPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        try {
            const response = await fetch(`/api/Users`, {
                method: 'POST',
                body: JSON.stringify({
                    email: data.email
                }),
            });
            const userid = await response.json();
            cartData.userId = userid.id;
            console.log(cartData.userId);
        } catch (error) {
            console.error('Error submitting the form', error);
        }

        try {
            const response = await fetch(`/api/Reservas`, {
                method: 'POST',
                body: JSON.stringify({
                    userId: cartData.userId,
                    vueloId: cartData.id,
                    precioReserva: cartData.precioVuelo
                }),
            });

            if (response.ok) {
                alert('Vuelo reservado exitosamente');
                cartData.userId = data.userId;
            }

            console.log({ response });
        } catch (error) {
            console.error('Error submitting the form', error);
        }
    }

    




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


    const [cartData, setCartData] = useState<any>(null);


    const searchParams = useSearchParams()
    console.log(searchParams.get('cart'))

    useEffect(() => {
        // Get the cart data from the router.query when the component mounts
        const cart = searchParams.get('cart');

        if (cart) {
            try {
                // Parse the cart data
                const parsedCart = JSON.parse(cart as string);
                setCartData(parsedCart);
            } catch (error) {
                console.error('Error parsing cart data:', error);
            }
        }
    }, [searchParams.get('cart')]);

    return (

        <main className="bg-white h-screen">
            <ShopNav />

            {/*Datos del Vuelo*/}
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">

                {cartData && (
                    <>
                        <div className="px-4 pt-8">
                            <p className="text-xl font-medium text-primary">Datos de la reserva</p>
                            <p className="text-gray-400">Revisa tu inventario</p>

                            <div className="mt-8 space-y-3 rounded-lg border bg-slate-100 px-2 py-4 sm:px-6">
                                <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="m-2 h-24 w-28 rounded-md border object-cover object-center text-gray-400">
                                        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                    </svg>
                                    <div className="flex w-fit flex-col px-4 py-4 text-text">
                                        <span className="font-semibold">Vuelo Ida.</span>
                                        <span className="float-right text-gray-400">{destinoRender(cartData.destinoCodigoPais)} a {origenRenderer(cartData.origenCodigoPais)}</span>
                                    </div>
                                    <div className="flex w-fit flex-col px-4 py-4 text-text">
                                        <span className="font-semibold text-white">Vuelo Ida.</span>
                                        <span className="float-right text-gray-400">Hora: {new Date(cartData.fechaLlegada).getHours()}:{new Date(cartData.fechaLlegada).getMinutes()}hrs (Sin escalas)</span>
                                        <p className="text-sm font-light text-gray-200">{AERender(cartData.codigoAerolinea)}</p>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <Link href="/vuelos" className='bg-gray-200 p-2 rounded-md'>
                                        Editar
                                    </Link>

                                </div>
                                <div className="border-t-2 text-sm">
                                    <p className="py-2 flex justify-start items-center">Sin cargos por cambios • Seleccion de asiento incluida</p>
                                </div>

                            </div>

                        </div>


                        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                            <p className="text-xl font-medium text-text">Detalles Personales</p>
                            <p className="text-gray-400">Completa la reservacion al completar los datos de este formulario.</p>
                            <form className="" onSubmit={handleSubmit(onSubmit)}>
                                <label className="mt-4 mb-2 block text-sm font-medium">Email</label>
                                <div className="relative">
                                    <input type="text" id="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 text-text" placeholder="your.email@gmail.com"
                                        {...register('email', { required: true })} />
                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>
                                </div>
                                <label className="mt-4 mb-2 block text-sm font-medium text-text">Nombre Completo</label>
                                <div className="relative">
                                    <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 text-text" placeholder="Your full name here" />
                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="mt-6 border-t border-b py-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">Subtotal</p>
                                        <p className="font-semibold text-gray-900">${cartData.precioVuelo} </p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">Impuestos</p>
                                        <p className="font-semibold text-gray-900">$0.00</p>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">Total</p>
                                    <p className="text-2xl font-semibold text-gray-900">${cartData.precioVuelo} </p>
                                </div>

                                <button className="mt-4 mb-8 w-full rounded-md bg-accent px-6 py-3 font-medium text-white" type="submit">Place Order</button>
                        
                            </form>
                        </div>
                    </>




                )}


            </div>

        </main>


    );
};

export default ReservationPage;