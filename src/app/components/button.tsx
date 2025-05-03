'use client'
import React from 'react'

interface Iprops {
    text: string;
    className?: string | number
}
const Button = (props: Iprops) => {
  return (
    <div>
        <button className='bg-gradient-to-r from-[#06b6d4] to-[#1e7583] text-white
         rounded py-1 px-4 font-semibold hover:scale-105 duration-150'>
        {props.text}
        </button>
    </div>
  )
}

export default Button