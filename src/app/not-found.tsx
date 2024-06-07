"use client";

import React from "react";

interface Props {}

const Error: React.FC<Props> = () => {
  return (
    <>
      <div
        className="text-tertiary bg-black flex items-center py-8 h-dvh"
        style={{
          minHeight: "calc(100vh - 19rem)",
        }}
      >
        <div className="max-w-max mx-auto text-center text-primary text-white">
          <h1 className="text-[10rem] text-white">404</h1>
          <h2 className="text-4xl">We Couldn&#39;t find this page.</h2>
        </div>
      </div>
    </>
  );
};

export default React.memo(Error);
