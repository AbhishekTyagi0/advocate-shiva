import React from "react";
import { FlipWordsDemo } from "./common/FlipWordsDemo";
import { BackgroundGradientDemo } from "./common/BackgroundGradientDemo";

export const HeroSection: React.FC = () => {
  return (
    <div className="flex w-full justify-between items-center p-24">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="w-full">
          <FlipWordsDemo />
        </div>
      </div>
      <div className="h-full">
        <BackgroundGradientDemo />
        {/* <p className="text-base sm:text-xl p-4 sm:px-6 text-black mt-4 mb-2 dark:text-neutral-200">
          Advocate at Surajpur Court, Noida
        </p> */}
      </div>
    </div>
  );
};
