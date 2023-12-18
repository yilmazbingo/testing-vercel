import React from 'react'

import { Londrina_Solid } from 'next/font/google';

const londrinaSolid = Londrina_Solid({weight: '400' , subsets: ['latin']});

function FlavorNameSlide( { flavorName, flavorNameColor, index }) 
{
    return (
        <div name="title-slide" 
            className={`absolute flex items-center justify-center w-full max-md:top-[11%] z-[11] ${index === 0 ? 'slide-initial' : 'slide-stand'}`}>
            
            <label style={{color: flavorNameColor}}
                    className={`text-[260px] absolute ${londrinaSolid.className}
                                max-[1200px]:text-[200px] max-[940px]:text-[150px]
                                max-md:text-[65px]`}>{flavorName.toUpperCase()}</label>
        </div>
    );
}

export default FlavorNameSlide