"use client";
import React from "react";
import IntroSection from "./components/IntroSection";
import HeroSection from "./components/HeroSection";
import PracticeAreas from "./components/Practice";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <IntroSection />
      <HeroSection />
      <PracticeAreas />
    </main>
  );
}
