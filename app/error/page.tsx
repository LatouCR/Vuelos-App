import Link from "next/link"

export default function error() {
    return (
        <section className="flex flex-col gap-12 items-center h-screen justify-center bg-background text-text">
            <h1 className="text-xl">Por favor Inicia Sesion</h1>
            <div className="justify-center items-center flex">
                <div className="rounded border border-black p-4">
                    <p className="text-sm text-text/60">Para acceder a esta función, necesita iniciar sesión en su cuenta. Una vez que haya iniciado sesión con éxito, podrá acceder a todas las características y beneficios que ofrecemos.</p>
                    <Link href="/login" className="text-sm text-accent underline justify-center flex">Iniciar Sesion</Link>


                </div>

            </div>

        </section>
    )
}