"use client"
import { useState } from "react"
import Breadcrumb from "../components/Breadcrump/Bread"
import UserList from "../components/UserList/UserList"
import CreateUser from "../components/Crear/Crear"




export default function Home() {
    const [currentForm, setCurrentForm] = useState<number | null>(null);

    const handleClick = (form: number) => {
        setCurrentForm(form);
    }

    return (
        <main className="bg-background h-screen">
            <Breadcrumb />

            <div className="max-w-screen-lg mx-auto flex justify-center items-center">

            </div>

            <div className="relative bg-transparent z-10 before:content-[''] before:block before:absolute before:bg-background-2 before:w-full before:h-[49px] before:top-0 before:left-0 before:-z-10">
                <div className="max-w-screen-lg mx-auto rounded-mg">

                    <div className="justify-center flex gap-8 mx-auto">
                        <button onClick={() => handleClick(1)} className="bg-accent rounded-t-md border border-white px-10 py-3">Ver Usuarios</button>
                        <button onClick={() => handleClick(2)} className="bg-accent rounded-t-md border border-white px-10 py-3">Crear Usuarios</button>
                    </div>

                    <div>

                        <div className="p-1">
                        </div>

                        {currentForm === 1 && <UserList />}
                        {currentForm === 2 && <CreateUser />}
                    </div>


                </div>



            </div>


        </main>
    )
}
