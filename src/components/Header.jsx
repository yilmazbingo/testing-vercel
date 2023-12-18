'use client';

import React from 'react';
import Link from "next/link";

import Navbar from "@/components/Navbar";

import { FaCircleUser } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

import { Londrina_Solid } from 'next/font/google';

const londrinaSolid = Londrina_Solid({weight: '400' , subsets: ['latin']});

function Header({ backgroundColor, textColor }) {
  return (
    <header id="header" style={{backgroundColor: backgroundColor, color: textColor}}
              className={`flex justify-start items-center 
                          py-4 font-semibold
                          relative transition duration-[1600ms] z-0`}>

        <Link href={"/#"} className={`text-3xl flex-initial ml-10 
                                        max-md:ml-5 ${londrinaSolid.className}`}>
            Trademark
        </Link>

        <Navbar/>

        <div className="flex text-xl gap-4 
                        flex-initial ml-auto
                        mr-10 max-md:mr-5">

            <Link href={"/#"}>
            <FaCircleUser/>
            </Link>

            <Link href={"/#"}>
            <FaShoppingBag/>
            </Link>
        </div>  

    </header>
  )
}

export default Header