import Link from "next/link";
import { FunctionComponent } from "react";

interface Props {
    header: string;
    text: string;
    imageSrc: string;
  }



const ImageCard: FunctionComponent<Props> = ({ header, text, imageSrc}) => {
  return (
    <div className="relative">
    <div className="relative max-w-screen-xl w-full bg-black rounded-xl">
      <img src={imageSrc} alt="" className="rounded-xl max-h-[584px] w-full object-cover opacity-75" />
    </div>

    <div className="absolute inset-0 flex items-center justify-start mx-8">
      <div className="max-w-sm">
        <h1 className="text-white text-5xl uppercase">
          {header}
        </h1>
        <p className="py-2  text-white text-xl">
          {text}
        </p>
        <Link href="/vuelos" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-background-2 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Reserva ya
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>

        </Link>
      </div>
    </div>
  </div>
  )
}

export default ImageCard