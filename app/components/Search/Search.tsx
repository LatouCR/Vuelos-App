"use client"
import Link from 'next/link'
import { useState } from 'react'

const Search = () => {

    // State variable to track the current text
    const [currentText, setCurrentText] = useState('Redondo');

    // Function to handle button click and toggle text
    const handleButtonClick = () => {
        // Toggle between Text A and Text B
        setCurrentText(currentText === 'Redondo' ? 'Sencillo' : 'Redondo');
    };
    return (
        <div className="relative bg-background z-10 before:content-[''] before:block before:absolute before:bg-background-2 before:w-full before:h-[77px] before:top-0 before:left-0 before:-z-10">
            {/*Container General */}
            <form action="">
                <div className="max-w-screen-xl mx-auto bg-white rounded-md flex-wrap justify-between shadow-lg shadow-background-2/40">
                    {/*Container Texto y Opciones*/}
                    <div className="flex p-4 border-b text-background-2 font-medium text-[16px]">
                        {/*Container Texto */}
                        <div className="inline-flex items-center h-11 gap-4">

                            <div className="w-fit">
                                {/* Viaje Redondo o Sencillo*/}
                                <div>
                                    {currentText === 'Redondo' ? (
                                        <button className="inline-flex justify-center items-center p-2 gap-1" onClick={handleButtonClick}>
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="white"
                                                    className="w-6 h-6 stroke-current"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                                                    />
                                                </svg>
                                            </span>
                                            Redondo
                                        </button>
                                    ) : (
                                        <button className="inline-flex justify-center items-center p-2 gap-1" onClick={handleButtonClick}>
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2"
                                                    stroke="white"
                                                    className="w-6 h-6 stroke-current"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                                                    />
                                                </svg>
                                            </span>
                                            Sencillo
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/*Pasajeros */}
                            <div className="w-fit">
                                <label htmlFor="Pasajeros"></label>
                                <select id="Pasajeros" className="inline-flex justify-center items-center p-2 gap-1 bg-transparent">
                                    <option defaultValue={0}>Pasajeros</option>
                                    <option value="1">1 Pasajero</option>
                                    <option value="2">2 Pasajeros</option>
                                    <option value="3">3 Pasajeros</option>
                                    <option value="4">4 Pasajeros</option>
                                    <option value="5">5 Pasajeros</option>
                                    <option value="6">6 Pasajeros</option>
                                </select>
                            </div>

                            {/*Busqueda Avanzada */}
                            <div className="w-fit">
                                <Link
                                    href="/vuelos"
                                    className="inline-flex justify-center items-center p-2 gap-1"
                                >
                                    Busqueda Avanzada
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2.5"
                                            stroke="currentColor"
                                            className="w-4 h-4 stroke-current"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/*Container Inputs */}
                    <div className="flex row p-6 gap-4">
                        {/*Container Destino & Origen */}
                        <div className="flex flex-nowrap justify-center items-center gap-2">
                            <div className="flex row gap-2 justify-center items-center">
                                <div className="flex items-center justify-center text-primary/80">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="48"
                                        height="48"
                                        fill="none"
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-xvp6ty"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 48 48"
                                    >
                                        <circle cx="24" cy="24" r="24" fill="#EFF5FF"></circle>
                                        <path
                                            fill="#0E68FF"
                                            fillRule="evenodd"
                                            d="m31.914 27.328-15.83-4.24a.997.997 0 0 1-.74-.97v-3.75c0-.33.31-.57.63-.48l.33.09c.31.08.55.3.67.59l.75 1.86 4.98 1.32v-6.88c0-.71.67-1.22 1.35-1.04.36.1.64.37.75.73l2.58 8.45 5.31 1.42c.8.22 1.27 1.04 1.06 1.84-.22.8-1.04 1.27-1.84 1.06zm-15.84 3.15h17c.55 0 1 .45 1 1s-.45 1-1 1h-17c-.55 0-1-.45-1-1s.45-1 1-1z"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            fill="#0E68FF"
                                            d="m16.084 23.088-.098.362h.001l.097-.362zm15.83 4.24-.097.362h.002l.095-.362zm-15.94-9.44-.101.361h.003l.098-.36zm.33.09-.098.362.005.001.093-.363zm.67.59.348-.14-.001-.003-.347.143zm.75 1.86-.348.14.07.174.182.049.096-.363zm4.98 1.32-.096.363.471.124v-.487h-.375zm1.35-7.92.1-.361-.004-.001-.096.362zm.75.73.359-.11-.359.11zm2.58 8.45-.358.11.06.199.201.053.097-.362zm5.31 1.42.1-.361-.003-.001-.097.362zm1.06 1.84.362.1v-.005l-.362-.095zM15.987 23.45l15.83 4.24.194-.724-15.83-4.24-.194.724zm-1.018-1.332c0 .63.414 1.168 1.017 1.332l.197-.724a.622.622 0 0 1-.464-.608h-.75zm0-3.75v3.75h.75v-3.75h-.75zm1.107-.84a.87.87 0 0 0-1.107.84h.75a.12.12 0 0 1 .154-.119l.203-.722zm.327.088-.33-.09-.197.724.33.09.197-.724zm.918.809a1.366 1.366 0 0 0-.923-.81l-.188.726c.19.05.34.183.418.37l.693-.286zm.751 1.863-.75-1.86-.696.28.75 1.86.696-.28zm4.728 1.098-4.98-1.32-.192.725 4.98 1.32.192-.725zm-.47-6.518v6.88h.75v-6.88h-.75zm1.82-1.402a1.45 1.45 0 0 0-1.82 1.402h.75a.7.7 0 0 1 .878-.677l.192-.725zm1.013.983a1.455 1.455 0 0 0-1.008-.982l-.201.723c.238.066.42.241.492.478l.717-.22zm2.58 8.45-2.58-8.45-.717.219 2.58 8.45.717-.22zm5.048 1.167-5.31-1.42-.194.724 5.31 1.42.194-.724zm1.326 2.297a1.884 1.884 0 0 0-1.323-2.296l-.2.723c.602.165.956.781.797 1.383l.726.19zm-2.298 1.328a1.884 1.884 0 0 0 2.297-1.323l-.723-.2a1.134 1.134 0 0 1-1.384.797l-.19.726zm1.255 2.412h-17v.75h17v-.75zm1.375 1.375c0-.757-.618-1.375-1.375-1.375v.75c.343 0 .625.282.625.625h.75zm-1.375 1.375c.757 0 1.375-.618 1.375-1.375h-.75a.628.628 0 0 1-.625.625v.75zm-17 0h17v-.75h-17v.75zM14.7 31.478c0 .757.618 1.375 1.375 1.375v-.75a.628.628 0 0 1-.625-.625h-.75zm1.375-1.375c-.757 0-1.375.618-1.375 1.375h.75c0-.343.282-.625.625-.625v-.75z"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    className="bg-transparent text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Origen"
                                    required
                                />
                            </div>

                            <div className="mx-8">
                                <div className="flex bg-slate-100 rounded-full w-8 h-8 hover:bg-slate-300 items-center justify-center text-primary/80">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="white"
                                        className="w-4 h-4 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex row gap-2 justify-center items-center">
                                <div className="flex items-center justify-center text-primary/80">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="48"
                                        height="48"
                                        fill="none"
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-xvp6ty"
                                        focusable="false"
                                        aria-hidden="true"
                                        viewBox="0 0 48 48"
                                    >
                                        <circle cx="24" cy="24" r="24" fill="#EFF5FF"></circle>
                                        <path
                                            fill="#0E68FF"
                                            fillRule="evenodd"
                                            d="M31.87 19.817c.8-.21 1.62.26 1.84 1.06.21.8-.27 1.62-1.07 1.84l-15.82 4.24c-.43.11-.89-.08-1.12-.47l-1.88-3.25a.492.492 0 0 1 .3-.73l.33-.09c.31-.08.63-.01.88.18l1.57 1.24 4.97-1.33-3.44-5.96c-.35-.61-.03-1.39.65-1.58.36-.1.75-.01 1.02.25l6.46 6.02 5.31-1.42zm-16.73 10.42h17c.55 0 1 .45 1 1s-.45 1-1 1h-17c-.55 0-1-.45-1-1s.45-1 1-1z"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            fill="#0E68FF"
                                            d="m33.71 20.877.363-.096-.001-.004-.362.1zm-1.84-1.06-.095-.363h-.002l.097.363zm.77 2.9.097.362h.003l-.1-.362zm-15.82 4.24.093.363.004-.001-.097-.362zm-1.12-.47-.324.187.001.003.323-.19zm-1.88-3.25.325-.188-.004-.007-.32.195zm.3-.73.091.363.008-.002-.099-.361zm.33-.09-.093-.364-.005.002.098.362zm.88.18.233-.295-.006-.004-.227.299zm1.57 1.24-.232.294.148.116.181-.048-.097-.362zm4.97-1.33.097.362.473-.127-.245-.423-.325.188zm-3.44-5.96-.325.186v.001l.325-.187zm.65-1.58-.1-.362.1.362zm1.02.25-.26.27.005.004.255-.274zm6.46 6.02-.255.274.152.142.2-.054-.097-.362zm7.512-.46a1.884 1.884 0 0 0-2.297-1.323l.19.725a1.134 1.134 0 0 1 1.384.797l.723-.199zm-1.332 2.301a1.89 1.89 0 0 0 1.333-2.297l-.725.19a1.14 1.14 0 0 1-.807 1.384l.199.723zm-15.823 4.24 15.82-4.24-.194-.724-15.82 4.24.194.725zm-1.54-.64a1.39 1.39 0 0 0 1.536.642l-.186-.727a.64.64 0 0 1-.704-.297l-.646.381zm-1.881-3.254 1.88 3.25.649-.375-1.88-3.25-.65.375zm.533-1.281a.867.867 0 0 0-.53 1.288l.642-.389a.117.117 0 0 1 .07-.172l-.182-.727zm.323-.088-.33.09.197.723.33-.09-.197-.723zm1.205.243a1.4 1.4 0 0 0-1.2-.244l.187.726a.65.65 0 0 1 .56.115l.453-.597zm1.576 1.244-1.57-1.24-.465.589 1.57 1.24.465-.589zm4.64-1.398-4.97 1.33.194.725 4.97-1.33-.194-.725zm-3.667-5.41 3.44 5.96.65-.375-3.44-5.96-.65.375zm.873-2.129a1.458 1.458 0 0 0-.874 2.128l.65-.373a.708.708 0 0 1 .426-1.032l-.202-.723zm1.381.341a1.435 1.435 0 0 0-1.38-.34l.2.722a.685.685 0 0 1 .66.159l.52-.54zm6.456 6.016-6.46-6.02-.511.549 6.46 6.02.511-.549zm4.957-1.508-5.31 1.42.194.725 5.31-1.42-.194-.725zm.367 10.408h-17v.75h17v-.75zm1.375 1.375c0-.757-.617-1.375-1.375-1.375v.75c.343 0 .625.282.625.625h.75zm-1.375 1.375c.758 0 1.375-.618 1.375-1.375h-.75a.628.628 0 0 1-.625.625v.75zm-17 0h17v-.75h-17v.75zm-1.375-1.375c0 .757.618 1.375 1.375 1.375v-.75a.628.628 0 0 1-.625-.625h-.75zm1.375-1.375c-.757 0-1.375.618-1.375 1.375h.75c0-.343.282-.625.625-.625v-.75z"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    className="bg-transparent text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Destino"
                                    required
                                />
                            </div>
                        </div>

                        {/*Fecha */}
                        <div className="mx-4 flex gap-2 justify-center items-center text-primary">
                            <div className="flex items-center justify-center text-primary/80">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    fill="none"
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-xvp6ty"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 48 48"
                                >
                                    <circle cx="24" cy="24" r="24" fill="#EFF5FF"></circle>
                                    <path
                                        fill="#0E68FF"
                                        fillRule="evenodd"
                                        d="m31.914 27.328-15.83-4.24a.997.997 0 0 1-.74-.97v-3.75c0-.33.31-.57.63-.48l.33.09c.31.08.55.3.67.59l.75 1.86 4.98 1.32v-6.88c0-.71.67-1.22 1.35-1.04.36.1.64.37.75.73l2.58 8.45 5.31 1.42c.8.22 1.27 1.04 1.06 1.84-.22.8-1.04 1.27-1.84 1.06zm-15.84 3.15h17c.55 0 1 .45 1 1s-.45 1-1 1h-17c-.55 0-1-.45-1-1s.45-1 1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                    <path
                                        fill="#0E68FF"
                                        d="m16.084 23.088-.098.362h.001l.097-.362zm15.83 4.24-.097.362h.002l.095-.362zm-15.94-9.44-.101.361h.003l.098-.36zm.33.09-.098.362.005.001.093-.363zm.67.59.348-.14-.001-.003-.347.143zm.75 1.86-.348.14.07.174.182.049.096-.363zm4.98 1.32-.096.363.471.124v-.487h-.375zm1.35-7.92.1-.361-.004-.001-.096.362zm.75.73.359-.11-.359.11zm2.58 8.45-.358.11.06.199.201.053.097-.362zm5.31 1.42.1-.361-.003-.001-.097.362zm1.06 1.84.362.1v-.005l-.362-.095zM15.987 23.45l15.83 4.24.194-.724-15.83-4.24-.194.724zm-1.018-1.332c0 .63.414 1.168 1.017 1.332l.197-.724a.622.622 0 0 1-.464-.608h-.75zm0-3.75v3.75h.75v-3.75h-.75zm1.107-.84a.87.87 0 0 0-1.107.84h.75a.12.12 0 0 1 .154-.119l.203-.722zm.327.088-.33-.09-.197.724.33.09.197-.724zm.918.809a1.366 1.366 0 0 0-.923-.81l-.188.726c.19.05.34.183.418.37l.693-.286zm.751 1.863-.75-1.86-.696.28.75 1.86.696-.28zm4.728 1.098-4.98-1.32-.192.725 4.98 1.32.192-.725zm-.47-6.518v6.88h.75v-6.88h-.75zm1.82-1.402a1.45 1.45 0 0 0-1.82 1.402h.75a.7.7 0 0 1 .878-.677l.192-.725zm1.013.983a1.455 1.455 0 0 0-1.008-.982l-.201.723c.238.066.42.241.492.478l.717-.22zm2.58 8.45-2.58-8.45-.717.219 2.58 8.45.717-.22zm5.048 1.167-5.31-1.42-.194.724 5.31 1.42.194-.724zm1.326 2.297a1.884 1.884 0 0 0-1.323-2.296l-.2.723c.602.165.956.781.797 1.383l.726.19zm-2.298 1.328a1.884 1.884 0 0 0 2.297-1.323l-.723-.2a1.134 1.134 0 0 1-1.384.797l-.19.726zm1.255 2.412h-17v.75h17v-.75zm1.375 1.375c0-.757-.618-1.375-1.375-1.375v.75c.343 0 .625.282.625.625h.75zm-1.375 1.375c.757 0 1.375-.618 1.375-1.375h-.75a.628.628 0 0 1-.625.625v.75zm-17 0h17v-.75h-17v.75zM14.7 31.478c0 .757.618 1.375 1.375 1.375v-.75a.628.628 0 0 1-.625-.625h-.75zm1.375-1.375c-.757 0-1.375.618-1.375 1.375h.75c0-.343.282-.625.625-.625v-.75z"
                                    ></path>
                                </svg>
                            </div>
                            <input type="date" name="date" id="" placeholder="fecha" />

                        </div>

                        {/*Boton Buscar */}
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button
                                type="button"
                                className="text-white bg-primary font-bold hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-white rounded-full text-sm px-4 py-3 text-center inline-flex items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                                Buscar Vuelos
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Search