import React from 'react';
import Link from 'next/link';

interface CardProps {
  heading: string;
  text: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ heading, text, imageSrc }) => {
  return (
    <div className="max-w-2xl bg-white border border-gray-200 rounded-xl overflow-hidden">
      <Link href="/vuelos" className="block box-border overflow-hidden">
        <img
          className="w-full h-auto object-cover rounded-t-xl md:w-[600px] md:h-[400px]"
          src={imageSrc}
          alt=""
        />
      </Link>
      <div className="p-8 bg-primary rounded-b-xl">
        <Link href="/vuelos">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{heading}</h5>
        </Link>
        <p className="mb-3 font-normal text-white">{text}</p>
        <Link
          href="/vuelos"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-background-2 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Reserva ya
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;
