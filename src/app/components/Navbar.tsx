import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div className="flex w-full justify-between items-center h-28 px-24 py-10 border sticky bg-white z-50 top-0">
      <div className="cursor-pointer w-auto h-full flex items-center justify-center">
        <Image
          src="/assets/shiva_image.png"
          alt="logo"
          width={50}
          height={16}
          className="rounded-full h-16 object-cover"
        />
      </div>
      <div className="flex flex-1 ml-20 justify-center">
        <ul className="flex gap-24">
          <li className="cursor-pointer hover:text-green-700 hover:underline underline-offset-8">
            Home
          </li>
          <li className="cursor-pointer hover:text-green-700 hover:underline underline-offset-8">
            About
          </li>
          <li className="cursor-pointer hover:text-green-700 hover:underline underline-offset-8">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
