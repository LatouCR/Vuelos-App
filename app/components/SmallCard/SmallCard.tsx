import React, { FunctionComponent } from 'react'
import Link from 'next/link'

interface CardProps {
  heading: string;
  text: string;
  imageSrc: string;
}

const SmallCard: FunctionComponent<CardProps> = ({ heading, text, imageSrc }) => {
  return (
    <div className='block h-fit max-w-52 border border-gray-200 rounded-xl shadow-sm overflow-hidden my-3'>
      <div className='max-w-sm max-h-sm bg-slate-600 overflow-hidden'>
        <Link href="/vuelos" className='overflow-hidden'>
          <img
            className='object-cover rounded-t-xl'
            src={imageSrc} alt={`${heading} image`} />
        </Link>
      </div>
      <div className='p-2 bg-background/80 rounded-b-xl'>
        <Link href="/vuelos">
          <h5 className='text-base font-bold tracking-tight text-black'>
            {heading}
          </h5>
          <p className='font-normal text-black'>
            {text}
          </p>
        </Link>
      </div>
    </div>

  )
}

export default SmallCard