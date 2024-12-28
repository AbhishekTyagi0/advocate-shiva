"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { FaBalanceScale } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2c3e50] text-white">
              <FaBalanceScale size={24} />
            </div>
            <span className="ml-3 text-xl font-serif font-bold text-gray-800">
              Advocate Shiva
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/practice-areas">Practice Areas</NavLink>
            <NavLink href="/about">About</NavLink>
            {/* <NavLink href="/contact">Contact</NavLink> */}
            <NavLink href="/contact">
              <button className="bg-[#2c3e50] text-white px-6 py-2 rounded-md hover:bg-[#34495e] transition-colors">
                Free Consultation
              </button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#2c3e50] transition-colors"
            >
              {isMenuOpen ? (
                <RiCloseLine size={24} />
              ) : (
                <RiMenu3Line size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg rounded-b-lg"
          >
            <div className="px-4 pt-2 pb-4 space-y-3">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink
                href="/practice-areas"
                onClick={() => setIsMenuOpen(false)}
              >
                Practice Areas
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </MobileNavLink>
              <MobileNavLink
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </MobileNavLink>
              <button className="w-full bg-[#2c3e50] text-white px-6 py-2 rounded-md hover:bg-[#34495e] transition-colors">
                Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-gray-700 hover:text-[#2c3e50] transition-colors font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="block text-gray-700 hover:text-[#2c3e50] transition-colors font-medium py-2"
  >
    {children}
  </Link>
);

export default Navbar;
