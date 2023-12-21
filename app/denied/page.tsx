import Link from "next/link"

export default function Denied() {
    return (
        <section className="flex flex-col gap-12 items-center h-screen justify-center">
            <h1 className="text-5xl">Acesso Restringido</h1>
            <p className="text-3xl max-w-2xl text-center">No tienes los permisos necesarios para acceder a esta página.
            </p>
            <Link href="/" className="text-3xl underline">Regresar a la pagina</Link>
        </section>
    )
}