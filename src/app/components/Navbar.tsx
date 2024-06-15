"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: React.FC = () => {
  const [active, setActive] = React.useState(false);

  return (
    <div className="flex w-full justify-between items-center h-24 md:px-24 px-6 py-8 border sticky bg-green-700 z-50 top-0">
      <div className="cursor-pointer h-full flex items-center justify-center">
        <Image
          src="/assets/shiva_image.png"
          alt="logo"
          width={50}
          height={16}
          className="rounded-full h-16 object-cover"
        />
      </div>
      <div className="flex flex-1 lg:ml-20 justify-end w-full">
        <p className="md:hidden">
          <GiHamburgerMenu
            size={30}
            className="cursor-pointer z-60"
            onClick={() => setActive(!active)}
          />
        </p>
        <ul className="flex gap-24 max-md:hidden w-[40%] right-0 font-semibold text-white bg-green-700 text-xl px-20">
          <Link href="/">
            <li className="cursor-pointer hover:text-black hover:underline underline-offset-8">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer hover:text-black hover:underline underline-offset-8">
              About
            </li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer hover:text-black hover:underline underline-offset-8">
              Contact
            </li>
          </Link>
        </ul>
        {!active && (
          <ul className="flex gap-12 md:hidden w-full  h-[calc(100vh-4rem)] absolute top-0 mt-24 font-bold items-center p-12 flex-col text-green-700 bg-slate-200 text-3xl  px-20 z-10">
            <Link href="/">
              <li
                className="cursor-pointer hover:text-black hover:underline underline-offset-8"
                onClick={() => setActive(!active)}
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                className="cursor-pointer hover:text-black hover:underline underline-offset-8"
                onClick={() => setActive(!active)}
              >
                About
              </li>
            </Link>
            <Link href="/contact">
              <li
                className="cursor-pointer hover:text-black hover:underline underline-offset-8"
                onClick={() => setActive(!active)}
              >
                Contact
              </li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
