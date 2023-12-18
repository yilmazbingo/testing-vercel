/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import FlavorNameSlide from "@/components/FlavorNameSlide";
import BottleImageSlide from "@/components/BottleImageSlide";
import NavigationDots from './NavigationDots';
import Leaves from './Leaves';
import BottomFruitSlide from './BottomFruitSlide';
import TopFruitSlide from './TopFruitSlide';

function Carrousel({ flavors, backgroundColor, currentIndex, onClick}) 
{
    

    return (
        <div id="carrousel" onClick={onClick} style={{backgroundColor: `${backgroundColor}`}}
            className={`text-white flex 
                        flex-col items-center justify-center
                        h-full relative overflow-hidden
                        select-none transition duration-[1600ms] z-10`}>

            {flavors.map((flavor, index) => <FlavorNameSlide key={'flavorName-'+index} index={index} flavorName={flavor.name} flavorNameColor={flavor.flavorNameColor}/>)}

            {flavors.map((flavor, index) => <BottleImageSlide key={'bottleImage-'+index} index={index} image={flavor.image}/>)}
            
            <NavigationDots flavors={flavors} currentIndex={currentIndex}/>

            {flavors.map((flavor, index) => <TopFruitSlide key={'side-img-top-'+index} image={flavor.fruitTop} index={index}/>)}

            {flavors.map((flavor, index) => <BottomFruitSlide key={'side-img-bottom-'+index} image={flavor.fruitBottom} index={index}/>)}

            <Leaves currentIndex={currentIndex}/>
            
        </div>
    )
}

export default Carrousel

/*     <div 
                className="absolute right-0 text-6xl 
                          text-transparent transition duration-500 
                          h-full flex items-center justify-center
                          right-button hover:text-white max-md:text-5xl">
            <GrFormNext/>
          </div>

          <div 
              className="absolute left-0 text-6xl 
                          text-transparent transition duration-500 
                          h-full flex items-center justify-center
                          left-button hover:text-white max-md:text-5xl">
            <GrFormPrevious/>
          </div> */