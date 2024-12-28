"use client";

import React from "react";
import { motion } from "framer-motion";
import { StickyScrollRevealDemo } from "@/app/components/common/StickyScrollRevealDemo";
import PracticeAreas from "@/app/components/Practice";
import { FaBalanceScale } from "react-icons/fa";
import Link from "next/link";

const PracticeAreasPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with Gradient Overlay */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[75vh] flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <FaBalanceScale className="text-6xl text-yellow-400" />
          </motion.div>
          <motion.h1
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            Legal Expertise You Can Trust
          </motion.h1>
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200"
          >
            With decades of experience in multiple practice areas, we provide
            comprehensive legal solutions tailored to your unique needs.
          </motion.p>
        </div>
      </motion.section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Comprehensive Legal Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From complex litigation to personal legal matters, our experienced
              team provides expert guidance across all areas of law.
            </p>
          </motion.div>
          <PracticeAreas />
        </div>
      </section>

      {/* Detailed Services with Sticky Scroll */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Our Legal Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our specialized legal services can help protect your
              rights and interests.
            </p>
          </motion.div>
          <StickyScrollRevealDemo />
        </div>
      </section>

      {/* CTA Section with Gradient */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c3e50] to-[#3498db]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-white mb-8"
          >
            Ready to Discuss Your Case?
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-100 mb-10"
          >
            &ldquo;Schedule a confidential consultation with our experienced
            legal team. We&apos;re here to protect your rights and fight for
            your interests.&rdquo;
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-x-4"
          >
            <Link href="/contact">
              <button className="bg-white text-[#2c3e50] px-8 py-4 rounded-md hover:bg-gray-100 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Free Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default PracticeAreasPage;
