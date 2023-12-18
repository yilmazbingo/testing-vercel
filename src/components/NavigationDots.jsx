import React from 'react'

function NavigationDots({ flavors, currentIndex }) {
    return (
        <div className='absolute bottom-3 flex justify-center items-center gap-3'>
            {flavors.map((flavor, index) => 
                <div key={'dot-'+index}
                    className={`${index === currentIndex ? 'h-3 w-3' : 'h-2 w-2 opacity-50'} transition-all duration-700 rounded-full`} style={{backgroundColor: flavors[currentIndex].flavorNameColor}}/>)}
        </div>
    )
}

export default NavigationDots