/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'

function Leaves({ currentIndex }) 
{
    const [leafDegres, setLeafDegrees] = useState([0, 90, 20, 300, 125, 180]);
    const [leavesInitialPositions, setLeavesInitialPositions] = useState(
        {
            right: [
                {normal: '-100px', mobile: '-100px'},
                {normal: '-50px', mobile: '-50px'},
                {normal: '38%', mobile: '20%'},
            ],

            left: [
                {normal: '-60px', mobile: '-60px'},
                {normal: '60px', mobile: '20px'},
                {normal: '43%', mobile: '20%'},
            ]
        })

    useEffect(() =>
    {
        const leavesRight = document.querySelectorAll('img[name="leaf-right"]');
        const leavesLeft = document.querySelectorAll('img[name="leaf-left"]');
        const viewportWidth = window.innerWidth;

        console.log(viewportWidth);

        leavesRight.forEach((leave, index) =>
        {
            leave.style.right = `calc(${viewportWidth >= 768 ? leavesInitialPositions.right[index].normal : leavesInitialPositions.right[index].mobile} + ${25 * currentIndex}px)`
        });

        leavesLeft.forEach((leave, index) =>
        {
            leave.style.left = `calc(${viewportWidth >= 768 ? leavesInitialPositions.left[index].normal : leavesInitialPositions.left[index].mobile} - ${15 * currentIndex}px)`
        });
        
    }, [currentIndex]);

    return (
        <>
            <img name='leaf-right' alt='leaf' src='/leaf.png' style={{rotate: (leafDegres[0]+(100*(currentIndex)))+'deg'}}
                    className='absolute w-auto h-[200px] max-md:h-[170px] transition-all duration-1000 max-sm:h-[150px] 
                                right-[-100px] top-[0px] max-sm:top-[20%] z-10'/>

            <img name='leaf-right' alt='leaf' src='/leaf.png' style={{rotate: (leafDegres[1]+(100*(currentIndex)))+'deg'}}
                    className='absolute w-auto blur-sm transition-all duration-1000 h-[130px] max-md:h-[100px] 
                            right-[-50px] bottom-[-30px] z-[15]'/>
                            
            <img name='leaf-right'  alt='leaf' src='/leaf.png' style={{rotate: (leafDegres[5]+(100*(currentIndex)))+'deg'}}
                    className='absolute w-auto transition-all duration-1000 h-[35px] max-sm:h-[25px]
                            right-[38%] max-sm:right-[20%] bottom-[25%] max-md:bottom-[20%] z-[12]'/>

            <img name='leaf-left' alt='leaf' src='/leaf.png'  style={{rotate: (leafDegres[2]+(100*(currentIndex)))+'deg'}}
                    className='absolute w-auto blur-sm transition-all duration-1000 h-[150px] max-sm:h-[120px] 
                            left-[-60px] bottom-[-10px] z-[15]'/>

            <img name='leaf-left' alt='leaf' src='/leaf.png' style={{rotate: (leafDegres[3]+(100*(currentIndex)))+'deg'}}
                    className='absolute w-auto transition-all duration-1000 h-[80px] max-sm:h-[50px] 
                            left-[60px] max-md:left-[20px] top-[0px] max-sm:top-[22%] z-10'/>

            <img name='leaf-left' alt='leaf' src='/leaf.png' style={{rotate: (leafDegres[4]+(100*(currentIndex)))+'deg'}}
                    className='absolute w-auto transition-all duration-1000 h-[35px] max-sm:h-[25px]
                            left-[43%] max-sm:left-[20%] top-[20%] max-md:top-[48%] z-[12]'/>
        </>
    )
}

export default Leaves