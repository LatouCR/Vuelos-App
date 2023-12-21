// components/Breadcrumb.tsx

"use client"
import React, { useState } from 'react';
import Link from "next/link";

interface BreadcrumbProps {}

const Breadcrumb: React.FC<BreadcrumbProps> = () => {
  const [showUsersSubMenu, setShowUsersSubMenu] = useState(false);
  const [showAdministrativeSubMenu, setShowAdministrativeSubMenu] = useState(false);
  const [showFlightsSubMenu, setShowFlightsSubMenu] = useState(false);

  return (
    <div className="bg-slate-100 p-4 text-blue-500">
      <nav className="container mx-auto">
        <ol className="list-reset flex text-grey-dark">
        <svg className="w-6 h-6 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
          <li><Link href="/" className="text-blue-500 font-semibold">Home</Link></li>
          <li className="mx-2">/</li>
          <li>
            <Link
              href="#"
              className="text-blue-500 font-semibold"
              onClick={() => setShowUsersSubMenu(!showUsersSubMenu)}
            >
              Usuarios
            </Link>
            {showUsersSubMenu && (
              <>
                <span className="mx-2">/</span>
                <Link href="/Users" className="text-blue-500 font-semibold">Manejar Usuarios</Link>
                <span className="mx-2">/</span>
                <Link href="/Cambiar" className="text-blue-500 font-semibold">Cambiar Contaseña</Link>
              </>
            )}
          </li>
          <li className="mx-2">/</li>
          <li>
            <Link
              href="#"
              className="text-blue-500 font-semibold"
              onClick={() => setShowAdministrativeSubMenu(!showAdministrativeSubMenu)}
            >
              Administracion
            </Link>
            {showAdministrativeSubMenu && (
              <>
                <span className="mx-2">/</span>
                <Link href="#" className="text-blue-500 font-semibold">Consecutivos</Link>
                <span className="mx-2">/</span>
                <Link href="#" className="text-blue-500 font-semibold">Paises</Link>
                <span className="mx-2">/</span>
                <Link href="#" className="text-blue-500 font-semibold">Aerolíneas  </Link>
                <span className="mx-2">/</span>
                <Link href="#" className="text-blue-500 font-semibold">Puertas del Aeropuerto</Link>
              </>
            )}
          </li>
          <li className="mx-2">/</li>
          <li>
            <Link
              href="#"
              className="text-blue-500 font-semibold"
              onClick={() => setShowFlightsSubMenu(!showFlightsSubMenu)}
            >
              Consultas
            </Link>
            {showFlightsSubMenu && (
              <>
                <span className="mx-2">/</span>
                <Link href="#" className="text-blue-500 font-semibold">Bitácora</Link>
                <span className="mx-2">/</span>
                <Link href="#" className="text-blue-500 font-semibold">Errores</Link>
                <span className="mx-2">/</span>
                <Link href="#" className="text-blue-500 font-semibold">Descargas</Link>
                <span className="mx-2">/</span>
                <Link href="#" className="text-blue-500 font-semibold">Aerolíneas</Link>
                <span className="mx-2">/</span>
                <Link href="#" className="text-blue-500 font-semibold">Puertas</Link>
              </>
            )}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
