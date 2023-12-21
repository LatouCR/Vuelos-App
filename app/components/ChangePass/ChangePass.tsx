"use client"
import { useForm } from 'react-hook-form';

interface FormValues {
    username: string;
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export default function ChangePassword() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit = async (data: FormValues) => {
        if (data.newPassword !== data.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await fetch(`/api/forget`, {
                method: 'POST',
                body: JSON.stringify({
                    username: data.username,
                    password: data.confirmPassword,
                }),
            });

            if (response.ok) {
                alert('Constraseña cambiada exitosamente');
            }

            console.log({ response });
        } catch (error) {
            console.error('Error submitting the form', error);
        }
    };

    return (
        <>
            <div className='max-w-md mx-auto bg-white rounded-md shadow-lg shadow-background-2/40 p-10'>
                <h1 className='text-text font-bold text-2xl mb-4'>Cambiar Contraseña</h1>

                <form className=""
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="oldPassword">
                            Contraseña anterior:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="oldPassword"
                            type="password"
                            placeholder=""
                            {...register('oldPassword', { required: true })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                            Nueva Contraseña:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="newPassword"
                            type="password"
                            placeholder=""
                            {...register('newPassword', { required: true })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirmar Nueva Contraseña:
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmPassword"
                            type="password"
                            placeholder=""
                            {...register('confirmPassword', { required: true })}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Cambiar Contraseña
                        </button>



                    </div>
                </form>

            </div>



        </>


    )
}
