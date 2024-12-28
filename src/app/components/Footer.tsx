"use client";
import React from "react";
import Link from "next/link";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailLock } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/practice-areas"
                  className="hover:text-white transition-colors duration-200"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <IoLocationOutline className="flex-shrink-0" />
                <span>
                  District and Session Court Gautam Budh Nagar Noida Surajpur,
                  201306
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhoneCall className="flex-shrink-0" />
                <span>+91 99586 79969</span>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineMailLock className="flex-shrink-0" />
                <span>shivatyagi945@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/shivaatyagiii/"
                className="hover:text-white transition-colors duration-200"
                target="_blank"
              >
                <BsInstagram size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/shiva.tyagi.3914"
                className="hover:text-white transition-colors duration-200"
                target="_blank"
              >
                <ImFacebook2 size={24} />
              </Link>
              <Link
                href="https://x.com/shivatyagi0015"
                className="hover:text-white transition-colors duration-200"
                target="_blank"
              >
                <FaXTwitter size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {date} Advocate Shiva Tyagi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
