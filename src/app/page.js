/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";

import Carrousel from "@/components/Carrousel";
import Header from "@/components/Header";

export default function Home() 
{
  const products = [
    {name: 'Orange', image: '/juice_1.png', color: '#ffb300', flavorNameColor: '#00b545', fruitTop: '/fruit_top_1.png', fruitBottom: '/fruit_bottom_1.png'},
    {name: 'Watermelon', image: '/juice_2.png', color: '#0f825b', flavorNameColor: '#ffffff', fruitTop: '/fruit_top_2.png', fruitBottom: '/fruit_bottom_2.png'},
    {name: 'Pineapple', image: '/juice_3.png', color: '#d9142b', flavorNameColor: '#ffb300', fruitTop: '/fruit_top_3.png', fruitBottom: '/fruit_bottom_3.png'}
  ]
 
  const [flavors, setFlavors] = useState(products);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lastAnimationStartTime, setLastAnimationStartTime] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#ffb300');

 
  const changeSlidePropierties = (slides = [], activeAnimationClass = '') =>
  {
    const bottles = products.length - 1;

    slides[currentSlide].classList.remove(activeAnimationClass);
    slides[currentSlide].classList.remove('slide-initial');

    slides[currentSlide].classList.add('slide-hidden');

    setTimeout(() =>
    {
      slides[currentSlide].classList.remove('slide-hidden');
      slides[currentSlide].classList.add('slide-stand');
    }, 1500)

    if(bottles <= currentSlide)
    {
      slides[0].classList.remove('slide-stand');
      slides[0].classList.add(activeAnimationClass);
      setCurrentSlide(0);
      return;
    }
    
    slides[currentSlide+1].classList.remove('slide-stand');
    slides[currentSlide+1].classList.add(activeAnimationClass);
    setCurrentSlide(currentSlide+1);
    
  }

  const handleNextSlide = (e) =>
  {
    if(e) if(e.target.id === 'main-image') return;
    
    const currentAnimationStartTime = performance.now();
    const timeDifferenceMs = currentAnimationStartTime - lastAnimationStartTime;

    if(!(timeDifferenceMs >= 1600)) return;

    setLastAnimationStartTime(currentAnimationStartTime);

    const bottleSlides = document.querySelectorAll('div[name="bottle-slide"]');
    const titleSlides = document.querySelectorAll('div[name="title-slide"]');
    const fruitTopSlides = document.querySelectorAll('div[name="fruit-top-slide"]');
    const fruitBottomSlides = document.querySelectorAll('div[name="fruit-bottom-slide"]');

    changeSlidePropierties(bottleSlides, 'bottle-active');
    changeSlidePropierties(titleSlides, 'title-active');
    changeSlidePropierties(fruitTopSlides, 'fruit-active');
    changeSlidePropierties(fruitBottomSlides, 'fruit-active');
  }

  useEffect(() =>
  {
    setBackgroundColor(flavors[currentSlide].color);

    const interval = setInterval(handleNextSlide, 4000);

    return () => {
      clearInterval(interval); // Limpieza al desmontar el componente
    };

  }, [currentSlide]);

  return (
    <main className="h-full flex flex-col">

      <Header backgroundColor={backgroundColor} textColor={flavors[currentSlide].flavorNameColor}/>

      <Carrousel flavors={flavors} backgroundColor={backgroundColor} currentIndex={currentSlide} onClick={handleNextSlide}/>

    </main>
  )
}