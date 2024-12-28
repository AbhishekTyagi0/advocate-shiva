"use client";

import React from "react";

function IntroSection() {
  return (
    <div className="z-10 relative w-full">
      <div className="relative w-full h-[40rem] lg:h-screen overflow-hidden">
        <video
          className=" w-full h-full opacity-70 object-cover"
          autoPlay
          loop
          muted
        >
          <source
            src="/assets/video/intro_video.mp4"
            type="video/mp4"
            className="w-full h-full"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute z-20 top-0 lg:text-8xl text-4xl h-full gap-6 flex flex-col font-bold w-full text-white items-center justify-center space-x-4">
          <span className="lg:text-7xl sm:text-3xl text-2xl">
            Helping You With Your
          </span>
          <span className="text-green-500">Legal Needs</span>
        </div>
      </div>

      <div className="absolute bg-gradient-to-b from-gray-500 to-white bottom-0 h-9 w-full"></div>
    </div>
  );
}

export default IntroSection;
