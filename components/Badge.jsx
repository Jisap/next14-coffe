import Image from 'next/image'
import React from 'react'

const Badge = ({ containerStyles }) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image 
        src="/assets/badge.svg"
        className='object-contain'
        fill
        alt="badge"
      />
    </div>
  )
}

export default Badge