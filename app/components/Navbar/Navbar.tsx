"use client";

import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  if(session?.user?.role === 'Admin'){
    return (
      <nav className="bg-background-2 border-b border-blue-200">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://svgsilh.com/svg/309386.svg"
              className="h-8 stroke-white"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              V-Vuelos
            </span>
          </Link>
  
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  
            {session?.user ? (
              <div className="flex gap-x-2 items-center">
                <div className="inline-flex items-center h-11 gap-4">
                <Link href="/dashboard">Dashboard</Link>
                </div>
  
                <p className="font-bold text-white">
                  {session.user.name}
                </p>
                <button
                  className="text-white bg-accent font-bold hover:bg-accent-light focus:ring-4 focus:outline-none focus:ring-white rounded-full text-sm px-4 py-2 text-center inline-flex items-center"
                  onClick={async () => {
                    await signOut({
                      callbackUrl: "/",
                    })
                  }}
                >
                  Cerrar Sesion
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn()}
                className="text-white bg-accent font-bold hover:bg-accent-light focus:ring-4 focus:outline-none focus:ring-white rounded-full text-sm px-4 py-3 text-center inline-flex items-center"            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 me-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Iniciar Sesion
              </button>
            )}
  
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 text-white hover:bg-secondary focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir Menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-inherit">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:text-700 md:text-white md:hover:text-accent-light"
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href='/vuelos'
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent-light"
                >
                  Vuelos
                </Link>
              </li>
              <li>
                <Link
                  href="/viajes"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent-light"
                >
                  Mis Viajes
                </Link>
              </li>
              <li>
                <Link
                  href="/cronograma"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent-light"
                >
                  Cronograma
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
    
  }

  return (
    <nav className="bg-background-2 border-b border-blue-200">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://svgsilh.com/svg/309386.svg"
            className="h-8 stroke-white"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            V-Vuelos
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

          {session?.user ? (
            <div className="flex gap-x-2 items-center">
              <p className="font-bold text-white">
                {session.user.name}
              </p>
              <button
                className="text-white bg-accent font-bold hover:bg-accent-light focus:ring-4 focus:outline-none focus:ring-white rounded-full text-sm px-4 py-2 text-center inline-flex items-center"
                onClick={async () => {
                  await signOut({
                    callbackUrl: "/",
                  })
                }}
              >
                Cerrar Sesion
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="text-white bg-accent font-bold hover:bg-accent-light focus:ring-4 focus:outline-none focus:ring-white rounded-full text-sm px-4 py-3 text-center inline-flex items-center"            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 me-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Iniciar Sesion
            </button>
          )}

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 text-white hover:bg-secondary focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir Menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-inherit">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:text-700 md:text-white md:hover:text-accent-light"
                aria-current="page"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href='/vuelos'
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent-light"
              >
                Vuelos
              </Link>
            </li>
            <li>
              <Link
                href="/viajes"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent-light"
              >
                Mis Viajes
              </Link>
            </li>
            <li>
              <Link
                href="/cronograma"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-accent-light"
              >
                Cronograma
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
