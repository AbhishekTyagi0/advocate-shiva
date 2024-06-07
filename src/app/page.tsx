import React from "react";
import { HeroSection } from "./components/HeroSection";
import { Practice } from "./components/Practice";
import IntroSection from "./components/IntroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <IntroSection/>
      <HeroSection />
      <Practice />
    </main>
  );
}
