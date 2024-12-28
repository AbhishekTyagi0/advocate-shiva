"use client";
import React from "react";
import IntroSection from "./components/IntroSection";
import HeroSection from "./components/HeroSection";
import PracticeAreas from "./components/Practice";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <IntroSection />
      <HeroSection />
      <PracticeAreas />
    </main>
  );
}
