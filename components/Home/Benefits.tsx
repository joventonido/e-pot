import React from "react";
import { BiBook, BiLink, BiVideo } from "react-icons/bi";
import { MdEco } from "react-icons/md";
import BoxText from "../Helper/BoxText";
import Image from "next/image";

const benefits = [
  {
    id: 1,
    title: "Benefit One",
    description: "Description for benefit one.",
    icon: <BiVideo className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "Benefit Two",
    description: "Description for benefit two.",
    icon: <MdEco className="w-6 h-6 text-white" />,
  },

  {
    id: 3,
    title: "Benefit Three",
    description: "Description for benefit three.",
    icon: <BiBook className="w-6 h-6 text-white" />,
  },

  {
    id: 4,
    title: "Benefit Four",
    description: "Description for benefit four.",
    icon: <BiLink className="w-6 h-6 text-white" />,
  },
];

const Benefits = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="py-16 px-4 w-[90%] md:w-[80%] mx-auto text-center">
        <div className="mx-auto w-fit mb-4">
          <BoxText text="Benefits" />
        </div>
        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-bold">Why Choose E-Pot Life</h2>
        {/* Sub Heading */}
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Because E‑Pot Life makes healthy eating fast, easy, and feel‑good.
        </p>
        <div className="mt-16 grid grid-cols-1 xl:grid-cols-3 gap-6 items-center">
          {/* Left side card */}
          <div className="grid gap-6">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay={index * 100}
                className="p-6 bg-white dark:bg-blue-950 shadow-md rounded-xl text-left border border-gray-200 dark:border-none"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-orange-500 flex items-center justify-center flex-col">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          {/* Center Image */}

          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
            className="flex justify-center"
          >
            <Image
              src="/images/ebooks.jpg"
              width={900}
              height={900}
              alt="image"
              className="rounded-xl shadow-md"
            />
          </div>
          {/* Right side card */}
          <div className="grid gap-6">
            {benefits.slice(2).map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay={300 + index * 100}
                className="p-6 bg-white dark:bg-blue-950 shadow-md rounded-xl text-left border border-gray-200 dark:border-none"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-orange-500 flex items-center justify-center flex-col">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
