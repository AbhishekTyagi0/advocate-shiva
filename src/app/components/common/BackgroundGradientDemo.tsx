"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px]  p-0 bg-white dark:bg-zinc-900">
        <Image
          src={`/assets/shiva_image.png`}
          alt="jordans"
          height="450"
          width="400"
          className="object-cover h-[500px] "
        />
        {/* <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Advocate at Surajpur Court, Noida
        </p> */}
      </BackgroundGradient>
    </div>
  );
}
