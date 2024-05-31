import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="w-full h-20 flex justify-center items-center bg-green-500 text-white text-2xl">
      <div>&copy;{date} Advocate Shiva Tyagi. All rights reserved.</div>
    </div>
  );
}

export default Footer;
