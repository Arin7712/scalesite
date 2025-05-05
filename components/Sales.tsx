import { Italiana } from "next/font/google";
import React from "react";
import { GridPattern } from "./magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { Check, Handshake, MoveUpRight, X } from "lucide-react";
import Image from "next/image";
import { driveupTags, otherTags } from "@/constants";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
});

const Sales = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between md:px-[10rem] px-6 py-[6rem] gap-6 bg-orange-600 text-white">
      <div className="flex flex-col gap-6 ">
        <div className=" md:max-w-sm">
          <span
            className={` text-white text-md uppercase flex items-center gap-2 ${italiana.className}`}
          >
            <Handshake/>
            Why choose us
          </span>
        </div>

        <div className="md:max-w-sm">
          <h1 className="text-5xl font-medium">We do things differently </h1>
        </div>
        <p className="md:max-w-sm md:text-sm text-sm">
          We create websites that not only make your brand unique but also drive
          real outcomes.
        </p>
        <button className="px-6 py-3 rounded-full text-white border-[1px] w-fit bg-orange-600 hover:bg-[#774dff] hover:cursor-pointer transition-all duration-300 flex items-center">
          <p className="font-medium">Start a Project</p>
          <MoveUpRight className="size-4 ml-6" />
        </button>
      </div>

      <div className="md:w-[65%] w-full bg-white rounded-xl flex justify-between text-black p-4 md:p-[3rem]">
        <div className="flex flex-col gap-10 w-[50%]">
          <div>
            <h1 className="uppercase font-bold">Driveup</h1>
          </div>
          <div>
            
            <ul className="flex flex-col gap-4 md:gap-[2rem]">
              {
                driveupTags.map((tag, index) => (
                  <li key={index} className="flex items-center gap-4 text-xs md:text-lg"><Check className="text-orange-600 size-5"/><p>{tag.name}</p></li>
                ))
              }
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-10 w-[50%]">
          <div>
            <h1 className="uppercase font-bold">Other agencies</h1>
          </div>
          <div>
            
            <ul className="flex flex-col gap-4 md:gap-[2rem]">
              {
                otherTags.map((tag, index) => (
                  <li key={index} className="flex items-center gap-4 text-xs md:text-lg"><X className="text-orange-600 size-5"/><p>{tag.name}</p></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
