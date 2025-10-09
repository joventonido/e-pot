import BoxText from "@/components/Helper/BoxText";
import React from "react";
import Slider from "./Slider";

const BestSelling = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100 dark:bg-gray-950">
      <div className="text-center">
        <div className="mx-auto w-fit mb-4">
          <BoxText text="Top Selling" />
        </div>
        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-bold">Top Selling E-Pot</h2>
        {/* Sub Heading */}
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Because E‑Pot Life makes healthy eating fast, easy, and feel‑good.
        </p>
      </div>
      {/* Slider Content */}
      <div className="w-[90%] md:w-[80%] mx-auto mt-16">
        <Slider />
      </div>
    </div>
  );
};

export default BestSelling;
