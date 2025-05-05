import Image from 'next/image'
import React from 'react'
import { navLinks } from '@/constants'
import { AlignJustify } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-50 flex justify-between items-center bg-gradient-to-b from-[#474747] to-[#474747] md:w-3xl w-[90%] rounded-lg px-6 py-4 mt-6 text-white'>
      <div className='flex items-center gap-0'>
        <Image src='/logo.avif' alt='logo' width={150} height={150} />
      </div>
      <div className='md:block hidden'>
        <ul className='flex items-center gap-6 text-sm font-medium'>
            {
                navLinks.map((link, index) => {
                    return (
                        <li key={index} className='hover:cursor-pointer hover:text-orange-600 transition-all duration-200'>
                            {link.name}
                        </li>
                    )
                })
            }
        </ul>
      </div>
      <div className='block md:hidden'>
      <AlignJustify/>
      </div>
    </div>
  )
}

export default Navbar
