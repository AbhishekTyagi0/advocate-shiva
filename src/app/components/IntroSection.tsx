"use client";

import React from "react";

function IntroSection() {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video/intro_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-[rgb(165,160,160)]">
        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          Helping You With Your
        </h1>
        <span className="text-3xl md:text-6xl font-bold text-slate-600">
          Legal Needs
        </span>
      </div>
    </div>
  );
}

export default IntroSection;
