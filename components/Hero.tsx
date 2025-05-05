'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';
import { TextRoll } from './ui/text-roll';
import { LogosSlider } from './ProgressiveBlurDemo';

const Hero = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 5000); // Every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      <div className="flex flex-col justify-center items-center lg:mt-[15rem] mt-[4rem] relative md:gap-[3rem] gap-10 md:px-0 px-6 md:h-auto h-screen">
        <TextRoll
          key={animationKey}
          className="md:text-6xl text-4xl md:mx-0 md:text-start text-center font-extrabold text-black dark:text-white md:block hidden"
        >
          Scale up your Business
        </TextRoll>
        <TextRoll
          key={animationKey + 1000} // Ensure a different key for mobile version to retrigger both
          className="md:text-6xl text-4xl md:mx-0 md:text-start text-center font-extrabold text-black dark:text-white md:hidden block"
        >
          Scale up your Business
        </TextRoll>

        <p className="md:w-[30%] text-center font-medium text-neutral-600 text-md">
          We create custom websites that deliver real business results, not just clicks.
        </p>
        <button className="px-6 py-3 rounded-full text-white bg-orange-600 hover:bg-[#774dff] hover:cursor-pointer transition-all duration-300 flex items-center">
          <p className="font-medium">Start a Project</p>
          <MoveUpRight className="size-4 ml-6" />
        </button>
        <p className="text-xs text-neutral-600 font-medium">Trusted by leading brands:</p>
        <div className="flex justify-center w-full">
          <LogosSlider />
        </div>
        <div className="animate-[float_3s_ease-in-out_infinite] absolute md:right-30 right-0 md:top-30 top-80">
          <Image
            src="/m1.avif"
            alt="m1"
            width={100}
            height={100}
            className="text-white"
          />
        </div>
        <div className="animate-[float_3s_ease-in-out_infinite] absolute md:left-30 left-0 md:top-30 top-10">
          <Image
            src="/rocket.avif"
            alt="rocket"
            width={100}
            height={100}
            className="text-white"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
