'use client';

// import React, { use } from 'react'

const Button = ({text}) => {
  return (
    <button className='rounded-lg m-20 cursor-copy hover:bg-blue-700 px-4 py-2 duration-700 hover:py-5 hover:px-5 transition-all text-white bg-teal-900  font-medium'>{text}</button>
  )
}

export default Button