import React from 'react'
import Link from 'next/link'

interface CardProps {
    heading: string;
    text: string;
    imageSrc: string;
  }

const SmallCard: React.FC<CardProps> = ({ heading, text, imageSrc }) => {
  return (
    <div className=''>
        <Link href="">
            <img 
            className=''
            src={imageSrc} alt="" />

        </Link>
    </div>

  )
}

export default SmallCard