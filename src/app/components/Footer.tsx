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
    <div className="w-full h-auto p-10 flex justify-between items-center bg-slate-200 text-xl px-20">
        <ul className="flex flex-col text-gray-500">
          <h3 className="text-3xl text-green-600 font-semibold mb-2">Go To:</h3>
          <Link href="/"><li className="cursor-pointer hover:text-green-700 hover:underline underline-offset-8 ">Home</li></Link>
          {/* <Link href="/practices"><li className="cursor-pointer hover:text-green-700 hover:underline underline-offset-8">Practices</li></Link> */}
          <Link href="/about"><li className="cursor-pointer hover:text-green-700 hover:underline underline-offset-8">About</li></Link>
          <Link href="/contact"><li className="cursor-pointer hover:text-green-700 hover:underline underline-offset-8">Contact</li></Link>
        </ul>
        <ul className="flex flex-col text-gray-500 justify-center">
          <h3 className="text-3xl text-green-600 font-semibold mb-2">Wants to know me:</h3>
          <li className="flex gap-2 items-center"><IoLocationOutline />District and Session Court Gautam Budh Nagar Noida Surajpur,201306</li>
          <li className="flex gap-2 items-center"><FiPhoneCall />+91 99586 79969</li>
          <li className="flex gap-2 items-center"><MdOutlineMailLock />shivatyagi945@gmail.com</li>
        </ul>
        <ul className="flex flex-col text-gray-500">
          <h3 className="text-3xl text-green-600 font-semibold mb-2">Follow Me on:</h3>
          <Link href="https://www.instagram.com/shivaatyagiii/"><li className="flex gap-2 items-center"><BsInstagram />Instagram</li></Link>
          <Link href="https://www.facebook.com/shiva.tyagi.3914"><li className="flex gap-2 items-center"><ImFacebook2 />Facebook</li></Link>
          <Link href="https://x.com/shivatyagi0015"><li className="flex gap-2 items-center"><FaXTwitter />Twitter</li></Link>
        </ul>
      </div>
    <div className="w-full h-20 flex justify-center items-center bg-green-700 text-white text-2xl">
      <div>&copy;{date} Advocate Shiva Tyagi. All rights reserved.</div>
    </div>
    </>
  );
}

export default Footer;
