import React from 'react'

function BottomFruitSlide({ image, index }) {
    return (
        <div name='fruit-bottom-slide' className={`absolute pointer-events-none flex flex-col items-center justify-center z-[12] h-full w-full ${index === 0 ? 'slide-initial' : 'slide-stand'}`}>

            <img src={image} alt='fruit'
                 className='absolute w-auto h-[20%] bottom-[10%] max-md:bottom-[7%] mr-[-150px] z-[12] rotate-[20deg]'/>
        
        </div>
    )
}

export default BottomFruitSlide