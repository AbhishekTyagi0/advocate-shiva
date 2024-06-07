"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const Error: React.FC<Props> = ({ error, reset }) => {
  return (
    <html>
      <body>
        <div
          className="text-tertiary py-8"
          style={{
            minHeight: "calc(100vh - 19rem)",
          }}
        >
          <div className="max-w-max mx-auto text-center text-white">
            <div className="text-[10rem]">500</div>
            <div className="text-4xl">Something Went Wrong!!!</div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default React.memo(Error);