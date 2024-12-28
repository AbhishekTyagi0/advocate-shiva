"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744')",
          filter: "brightness(0.3)",
        }}
      />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Justice & Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto"
          >
            Dedicated legal representation with over 15 years of experience in
            criminal, civil, and corporate law.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-base text-gray-300 mb-8 max-w-3xl mx-auto space-y-4"
          >
            <p>
              Specializing in complex litigation, we provide strategic counsel
              and vigorous advocacy across Surajpur Court and the Greater Noida
              region.
            </p>
            <p className="font-light">
              • Criminal Defense • Civil Litigation • Corporate Law • Family Law
              • Real Estate • Labor Law
            </p>
            <p className="text-xs md:text-sm italic">
              &ldquo;Committed to protecting your rights and securing your
              future with unwavering dedication and legal expertise.&rdquo;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-x-4"
          >
            {/* <button className="bg-[#2c3e50] text-white px-8 py-3 rounded-md hover:bg-[#34495e] transition-colors text-lg">
              Schedule Consultation
            </button> */}
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors text-lg">
                Learn More
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
