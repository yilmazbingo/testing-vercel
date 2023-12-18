/* eslint-disable @next/next/no-img-element */
import React from 'react'

function BottleImageSlide({ index, image }) {
  return (
    <div name="bottle-slide" 
         className={`w-full h-2/3 flex absolute justify-center max-h-[550px] max-md:bottom-[10%] max-md:h-[55%] z-[12]
                     ${index === 0 ? 'slide-initial' : 'slide-stand'}`}>

              <img id='main-image' src={image} alt="juice"
                  className="absolute mt-[20px]
                             w-auto h-full drop-shadow-xl cursor-pointer transition 
                             hover:rotate-12 hover:scale-110 hover:drop-shadow-2xl"/>
                             
    </div>
  )
}

export default BottleImageSlide