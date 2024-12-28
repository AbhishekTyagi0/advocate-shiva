"use client";

import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="z-10 relative w-full">
      <div className="relative w-full h-[40rem] lg:h-screen overflow-hidden">
        <Image
          src="/assets/my_image.jpg"
          //   src="/assets/shiva_image.png"
          alt="my image"
          height="450"
          width="400"
          className=" w-full h-full opacity-70 object-stretch"
        />
        <div className="absolute z-20 top-0 lg:text-8xl text-4xl h-full gap-6 flex flex-col font-bold w-full text-white items-center justify-center space-x-4">
          <span className="lg:text-7xl sm:text-3xl text-2xl">Advocate</span>
          <span className="text-green-500">Shiva Tyagi</span>
        </div>
      </div>

      <div className="absolute bg-gradient-to-b from-gray-500 to-white bottom-0 h-9 w-full"></div>
    </div>
  );
};

export default AboutSection;
