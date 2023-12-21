'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type FormValues = {
    email: string
    name: string
    apellido: string
    username: string
    password: string
    passwordConfirmation: string
};

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const router = useRouter();

    const onSubmit = async (data: FormValues) => {
        if (data.password !== data.passwordConfirmation) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await fetch(`/api/register`, {
                method: 'POST',
                body: JSON.stringify({
                    email: data.email,
                    name: data.name,
                    username: data.username,
                    password: data.password,
                }),
            });

            if (response.ok) {
                alert('Usuario creado exitosamente');
                router.push('/');
            }

            console.log({ response });
        } catch (error) {
            console.error('Error submitting the form', error);
        }
    };

    return (

        <>
            <div className='bg-white'>
                <div className="p-8 bg-background-2">
                </div>

                <div className="relative bg-background z-10 before:content-[''] before:block before:absolute before:bg-background-2 before:w-full before:h-[110px] before:top-0 before:left-0 before:-z-10">
                    <div className="max-w-screen-lg mx-auto bg-white rounded-md flex-wrap justify-between shadow-lg shadow-background-2/40 px-14 py-8">

                        <div className="flex py-4 text-background-2 font-medium text-[16px]">

                            {/*Container Texto */}
                            <div className="inline-flex items-center h-11 gap-4">
                                <div className=''>
                                    <h2 className='mb-2 font-bold text-2xl'>
                                        Afiliate a V-Vuelos
                                    </h2>
                                    <p>
                                        Solicitamos tus datos personales para que puedas acceder a nuestros servicios.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <hr className='border-1 border-slate-200 mb-8 ' />

                        <div>
                            <h3 className='text-text font-bold mb-4'>
                                Acerca de Ti
                            </h3>
                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <div className='flex flex-wrap -mx-3 mb-6'>
                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Nombre
                                    </label>
                                    <input
                                        {...register('name', { required: true })}
                                        className="block w-full rounded-md border-0 p-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        type="text"
                                    />

                                </div>

                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                                        Apellido
                                    </label>
                                    <input
                                        {...register('apellido')}
                                        className="block w-full rounded-md border-0 p-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>

                            <div className='flex flex-wrap -mx-3 mb-6'>
                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                        Nombre de Usuario
                                    </label>
                                    <input
                                        {...register('username', { required: true })}
                                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        type="text"
                                    />
                                </div>

                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="verificar" className='block text-sm font-medium leading-6 text-inherit'>
                                        Verificar
                                    </label>
                                    <button className='w-full p-3 bg-inherit border-2 border-primary rounded-md text-primary hover:bg-background-2 hover:text-white'>
                                        Verificar Existencia
                                    </button>
                                </div>
                            </div>

                            <h3 className='text-text font-bold mb-4'>
                                Creedenciales
                            </h3>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Correo Electronico
                                </label>
                                <input
                                    {...register('email', { required: true })}
                                    className="block w-full rounded-md border-0 p-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    type="email"
                                    required
                                />
                            </div>

                            <div className='flex flex-wrap -mx-3 mb-6'>


                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Contraseña
                                    </label>
                                    <input
                                        {...register('password', { required: true })}
                                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        type="password"
                                        required
                                    />
                                </div>

                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label htmlFor="passwordConfirmation" className="block text-sm font-medium leading-6 text-gray-900">
                                        Verificar Contraseña
                                    </label>
                                    <input
                                        {...register('passwordConfirmation', { required: true })}
                                        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        type="password"
                                        required
                                    />
                                </div>


                            </div>

                            <button type="submit" className='bg-accent/80 w-full p-4 text-semibold rounded-full'>Crear Cuenta</button>
                        </form>
                    </div>
                </div>

                <div className="p-8">
                </div>



            </div>
        </>




    );
}