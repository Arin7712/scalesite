import React from 'react'
import { Italiana } from 'next/font/google'
import Image from 'next/image'
import { LaptopMinimalCheck, MoveUpRight, Palette, TextSearch } from 'lucide-react'

const italiana = Italiana({
  subsets: ['latin'],
  weight: '400',
})

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center py-[6rem] gap-6 bg-white md:px-0 px-6'>
      <div className='flex items-center w-full max-w-sm'>
        <div className='flex-grow border-t border-orange-600'></div>
        <span className={`mx-4 text-orange-600 text-md uppercase ${italiana.className}`}>
          Services
        </span>
        <div className='flex-grow border-t border-orange-600'></div>
      </div>

      <div className='max-w-md text-center'>
        <h1 className='text-5xl'>We build websites, and that’s it
        </h1>
      </div>

      <p className="md:w-[30%] text-center font-medium text-neutral-600 text-md">
      Our proven formula for high-converting sites</p>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:max-w-5xl'>
        <div className='rounded-md flex flex-col items-center justify-between p-6 bg-[#e8f1ff] h-[24rem] w-[100%] gap-[4rem]'>
            <div>
            <TextSearch className='size-28 text-[#0062ff]'/>
            </div>
            <div>
                <h1 className='text-xl font-bold'>Copywriting</h1>
                <p>Words that convert visitors into customers.</p>
            </div>
        </div>
        <div className='rounded-md flex flex-col items-center justify-between h-[24rem] p-6 bg-[#f9edff] gap-[4rem]'>
            <div>
            <TextSearch className='size-28 text-[#774dff]'/>
            </div>
            <div>
                <h1 className='text-xl font-bold'>Design</h1>
                <p>Bold website visuals that make your brand unforgettable.</p>
            </div>
        </div>
        <div className='rounded-md flex flex-col items-center justify-between h-[24rem] p-6 bg-[#ffe8e8] gap-[4rem]'>
            <div>
            <Palette className='size-28 text-[#ff6645]'/>
            </div>
            <div>
                <h1 className='text-xl font-bold'>Development</h1>
                <p>Bringing designs to life with impressive animations.</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Services;
