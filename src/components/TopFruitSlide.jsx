/* eslint-disable @next/next/no-img-element */
import React from 'react'

function TopFruitSlide({ index, image }) {
  return (
    <div name='fruit-top-slide' className={`absolute pointer-events-none flex flex-col items-center justify-center z-[11] h-full w-full ${index === 0 ? 'slide-initial' : 'slide-stand'}`}>

        <img src={image} alt='fruit'
             className={`absolute w-auto h-[25%] bottom-[40%] max-md:bottom-[33%] mr-[150px] z-[11] rotate-[340deg] `}/>
        
      </div>
  )
}

export default TopFruitSlide