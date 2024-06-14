import React from "react";
import { StickyScrollRevealDemo } from "@/app/components/common/StickyScrollRevealDemo";

export const Practice: React.FC = () => {
  return (
    <div className="lg:mt-20 my-10 w-full">
      <h1 className="text-3xl font-bold text-green-600 flex justify-center items-center">
        What do you need help with?
      </h1>
      <StickyScrollRevealDemo />
    </div>
  );
};
