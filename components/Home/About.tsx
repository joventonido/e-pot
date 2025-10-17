import React from "react";
import Image from "next/image";
import BoxText from "../Helper/BoxText";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100 dark:bg-gray-950">
      <div className="w-[90%] md:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-5 gap-14 items-center">
        {/* Image Content */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="xl:col-span-2"
        >
          <Image
            src="/images/ebooks.jpg"
            alt="image"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
        {/* Text Content */}
        <div className="xl:col-span-3">
          {/* Box text */}
          <BoxText text="About Us" />
          {/* Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-6 mb-6 text-gray-800 dark:text-gray-200 font-semibold">
            About This Best Selling Book
          </h1>
          {/* Descr */}
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-500">
            {
              "Don't be afraid to take risks. Stepping outside your comfort zone is where the real growth happens. Whether it's trying a new hobby, traveling to a new place, or speaking up for what you believe in, those risks often lead to the most rewarding experiences."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
