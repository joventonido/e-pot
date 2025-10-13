import BoxText from "@/components/Helper/BoxText";
import React from "react";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100 dark:bg-gray-950">
      <div className="text-center">
        <div className="mx-auto w-fit mb-4">
          <BoxText text="Pricing" />
        </div>
        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-bold">Our Pricing</h2>
        {/* Sub Heading */}
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          See the table below for our current pricing.
        </p>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
        <div>
          <PriceCard type="Basic" price="$19" />
        </div>
        <div>
          <PriceCard type="Advanced" price="$59" />
        </div>
        <div>
          <PriceCard type="Premium" price="$99" />
        </div>
      </div>
    </div>
  );
};

export default Price;
