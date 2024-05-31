import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["inspired", "impactful", "persistent", "passionate"];

  return (
    <div className="h-[40rem] flex justify-center px-3 flex flex-col">
      <div className="text-2xl  mx-auto font-normal text-black dark:text-black">
        Champion your cause with <FlipWords words={words} /> advocacy.
        <br />
        Our dedicated team works tirelessly to drive meaningful change,
        <br />
        ensuring your voice is heard and your goals are achieved.
      </div>
      <button className="w-40 p-3 bg-green-500 hover:bg-green-600 rounded-xl mt-10 text-xl font-semibold text-white transform transition-all duration-300">
        Contact Me
      </button>
    </div>
  );
}
