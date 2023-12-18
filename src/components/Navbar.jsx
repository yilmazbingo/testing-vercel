import React from 'react'
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="w-2/4 absolute flex-initial text-lg font-bold translate-x-1/2 max-sm:hidden">
          <ul className="flex justify-around">
            <li>
              <Link href={"/#"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/#"}>
                Flavors
              </Link>
            </li>
            <li>
              <Link href={"/#"}>
                About
              </Link>
            </li>
            <li>
              <Link href={"/#"}>
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
    )
}

export default Navbar