import React from "react";
import BoxText from "../Helper/BoxText";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* text content */}
        <div>
          <BoxText text="Digital E-Pot" />
          <h1 className="text-2xl md:text-3x1 lg:text-4xl mt-6 mb-6 font-bold text-blue-950 dark:text-white leading-[2.5rem] md:leading-[3.5rem]">
            {
              "E-Pot Life can be a wild ride, full of ups and downs, twists and turns. Here's some advice to help you navigate it"
            }
            <span className="text-orange-500"> Development</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-500">
            {
              "Don't be afraid to take risks. Stepping outside your comfort zone is where the real growth happens. Whether it's trying a new hobby, traveling to a new place, or speaking up for what you believe in, those risks often lead to the most rewarding experiences."
            }
          </p>
          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#_"
              className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Download Now
            </a>
            <a
              href="#_"
              className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-green-600 border border-transparent rounded-full md:w-auto hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              Read More
            </a>
          </div>
        </div>
        {/* image content */}
        <div className="mx-auto hidden xl:block rounded-t-full">
          <Image
            src="/images/ebooks.jpg"
            alt="image"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
