import React from "react";
import { FlipWords } from "../ui/flip-words";
import Link from "next/link";

export function FlipWordsDemo() {
  const words = ["impactful", "diligent", "persistent", "passionate"];

  return (
    <div className="h-[40rem] flex justify-center px-3 flex flex-col">
      <div className="lg:text-2xl sm:text-xl text-lg mx-auto font-normal text-black dark:text-black">
        As a <FlipWords words={words} /> advocate at Surajpur Court,
        <br />
        I provide personalized legal assistance with a focus on client needs.
        <br />
        Count on me for dedicated representation and guidance tailored to your
        specific legal needs.
      </div>
      <Link href="/contact">
        <button className="w-40 p-3 cursor-pointer bg-green-500 hover:bg-green-600 rounded-xl mt-10 text-xl font-semibold text-white transform transition-all duration-300">
          Contact Me
        </button>
      </Link>
    </div>
  );
}
