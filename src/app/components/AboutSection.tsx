"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutSection = () => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8">
        Legal Excellence & Trust
      </h1>

      <div className="space-y-6">
        <p className="text-lg md:text-xl leading-relaxed">
          With a foundation built on integrity and expertise, we provide
          comprehensive legal solutions tailored to your unique needs.
        </p>

        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          Serving clients at Surajpur Court with dedication and professionalism
          in matters of criminal, civil, and corporate law.
        </p>

        <ul className="text-sm md:text-base space-y-3 text-gray-300">
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Expert Criminal Defense</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Complex Civil Litigation</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Corporate Law Solutions</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Family Law Expertise</span>
          </li>
        </ul>

        <div className="pt-6">
          <Link href="/contact">
            <button className="bg-slate-600 text-white px-8 py-3 rounded-md hover:bg-slate-800 transition-colors text-lg">
              Schedule Consultation
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="relative w-full min-h-screen bg-gray-50">
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="relative h-[60vh]">
          <Image
            src="/assets/my_image.jpg"
            alt="Advocate Portrait"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        </div>
        <div className="relative bg-gray-900 p-6">{content}</div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex h-screen">
        <div className="relative w-1/2 h-full">
          <Image
            src="/assets/my_image.jpg"
            alt="Advocate Portrait"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10" />
        </div>

        <div className="relative w-1/2 h-full bg-gradient-to-b from-gray-900/90 to-gray-900/80 flex items-center p-12 lg:p-16">
          {content}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
