"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaBuilding,
  FaHandshake,
  FaGavel,
} from "react-icons/fa";

const practices = [
  {
    icon: <FaBalanceScale className="text-4xl" />,
    title: "Criminal Law",
    description:
      "Expert defense in criminal cases with a proven track record of success.",
  },
  {
    icon: <FaBuilding className="text-4xl" />,
    title: "Corporate Law",
    description: "Comprehensive legal solutions for businesses of all sizes.",
  },
  {
    icon: <FaHandshake className="text-4xl" />,
    title: "Civil Litigation",
    description:
      "Resolving complex civil disputes through negotiation and litigation.",
  },
  {
    icon: <FaGavel className="text-4xl" />,
    title: "Family Law",
    description:
      "Sensitive handling of family matters with compassion and expertise.",
  },
];

const PracticeAreas = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">
            Practice Areas
          </h2>
          <p className="text-xl text-gray-600">
            Specialized legal expertise to serve your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-[#2c3e50] mb-4">{practice.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{practice.title}</h3>
              <p className="text-gray-600">{practice.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
