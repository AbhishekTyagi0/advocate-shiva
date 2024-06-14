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
    <>
      <div className="w-full h-auto md:p-10 p-5 flex flex-col md:flex-row max-md:gap-10 justify-between md:items-center bg-slate-200 text-sm md:px-20 px-6">
        <ul className="flex flex-col text-gray-500">
          <h3 className="text-xl text-green-600 font-semibold mb-2">Go To:</h3>
          <li className="cursor-pointer hover:text-green-700 hover:underline underline-offset-8 ">
            <Link href="/">Home</Link>
          </li>

          <li className="cursor-pointer hover:text-green-700 hover:underline underline-offset-8">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-green-700 hover:underline underline-offset-8">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="flex flex-col text-gray-500 justify-center">
          <h3 className="text-xl text-green-600 font-semibold mb-2">
            Wants to know me:
          </h3>
          <li className="flex gap-2 items-center">
            <IoLocationOutline />
            District and Session Court Gautam Budh Nagar Noida Surajpur,201306
          </li>
          <li className="flex gap-2 items-center">
            <FiPhoneCall />
            +91 99586 79969
          </li>
          <li className="flex gap-2 items-center">
            <MdOutlineMailLock />
            shivatyagi945@gmail.com
          </li>
        </ul>
        <ul className="flex flex-col text-gray-500">
          <h3 className="text-xl text-green-600 font-semibold mb-2">
            Follow Me on:
          </h3>
          <li>
            <Link
              className="flex gap-2 items-center"
              href="https://www.instagram.com/shivaatyagiii/"
            >
              <BsInstagram />
              Instagram
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center"
              href="https://www.facebook.com/shiva.tyagi.3914"
            >
              <ImFacebook2 />
              Facebook
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center"
              href="https://x.com/shivatyagi0015"
            >
              <FaXTwitter />
              Twitter
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-20 flex justify-center items-center bg-green-700 text-white">
        <div>&copy;{date} Advocate Shiva Tyagi. All rights reserved.</div>
      </div>
    </>
  );
}

export default Footer;
