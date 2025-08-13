import React from 'react'

export default function Card({url}) {
  return (
        <div className='w-[450px] overflow-hidden rounded-2xl cursor-pointer'>
            <img className='w-full h-full hover:scale-105 transition-full duration-500' src={url} alt="" />
        </div>
  )
}
