"use client";
import React from "react";
import Image from "next/image";

const content = [
  {
    title: "Criminal Case",
    description:
      "Representing you in criminal cases such as theft, assault, or any other criminal charges. This involves defending you in court, negotiating plea deals, and working to ensure your rights are protected throughout the legal process.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://cdn.pixabay.com/photo/2019/12/18/13/07/right-4703934_1280.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Intellectual Property Rights",
    description:
      "Protect your creative ideas and innovations with our expert Intellectual Property Law services at Surajpur Court. We specialize in patent, trademark, and copyright registration, ensuring your inventions, brands, and original works are fully safeguarded. With extensive knowledge of Indian IP laws, we help you secure exclusive rights and defend against infringements, allowing you to maximize the value of your intellectual assets.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Civil Law",
    description:
      "Handling disputes between individuals or organizations, such as property disputes, contract issues, or family law matters like divorce, child custody, and maintenance.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Labor and Employment Law",
    description:
      "Protect your workplace rights with our specialized Labor and Employment Law services at Surajpur Court. We handle employment contracts, wrongful termination cases, workplace disputes, and labor rights issues, ensuring fair treatment and compliance with Indian labor laws. Trust us to advocate for your rights and provide expert legal support.",

    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/labor1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full lg:p-20 p-6 md:10">
      {content.map((item, index) => (
        <div
          className="max-md:hidden w-full flex justify-between items-center mt-10 gap-20"
          key={index}
        >
          <div className="w-[50%] h-[20rem] flex justify-center item-center">
            {item.content}
          </div>
          <div className="gap-10 flex flex-col w-[50%] justify-center item-center">
            <div className="w-full flex justify-center item-center font-bold text-3xl text-green-600 line-height-10">
              {item.title}
            </div>
            <div className="w-full flex justify-center item-center text-slate-500">
              {item.description}
            </div>
          </div>
        </div>
      ))}
      {content.map((item, index) => (
        <div
          className="md:hidden w-full flex flex-col justify-between items-center mt-10 gap-6"
          key={index}
        >
          <div className="w-full flex justify-center item-center font-bold text-3xl text-green-600 line-height-10">
            {item.title}
          </div>
          <div className="gap-6 flex flex-col w-full justify-center item-center">
            <div className="w-full h-[20rem] flex justify-center item-center">
              {item.content}
            </div>
            <div className="w-full flex justify-center item-center text-slate-500">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
