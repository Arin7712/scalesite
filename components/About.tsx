import React from 'react'
import { Italiana } from 'next/font/google'
import Image from 'next/image'
import { MoveUpRight } from 'lucide-react'

const italiana = Italiana({
  subsets: ['latin'],
  weight: '400',
})

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center py-[6rem] gap-6'>
      <div className='flex items-center w-full max-w-sm'>
        <div className='flex-grow border-t border-orange-600'></div>
        <span className={`mx-4 text-orange-600 text-md uppercase ${italiana.className}`}>
          About us
        </span>
        <div className='flex-grow border-t border-orange-600'></div>
      </div>

      <div className='max-w-sm text-center'>
        <h1 className='text-5xl'>Who we are in one minute</h1>
      </div>

      <div className='rounded-md bg-white p-2 max-w-sm'>
        <Image src="/c2.webp" alt="sunset" width={400} height={400}  className='rounded-md object-cover '/>
      </div>

      <button className="px-6 py-3 rounded-full text-white bg-orange-600 hover:bg-[#774dff] hover:cursor-pointer transition-all duration-300 flex items-center">
          <p className="font-medium">Let's Talk</p>
          <MoveUpRight className="size-4 ml-6" />
        </button>
    </div>
  )
}

export default About
