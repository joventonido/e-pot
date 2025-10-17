import BoxText from "@/components/Helper/BoxText";
import React from "react";

const Reading = () => {
  return (
    <div className="relative w-full h-screen flex justify-center flex-col">
      <div className="mx-auto w-fit mb-4">
        <BoxText text="Reading" />
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl md:text-3x1 lg:text-4xl mt-6 mb-6 font-bold text-blue-950 dark:text-white leading-[2.5rem] md:leading-[3.5rem]">
            {"Welcome back! Please sign in to continue working on Development."}
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-500">
            {
              "Don't be afraid to take risks. Stepping outside your comfort zone is where the real growth happens. Whether it's trying a new hobby, traveling to a new place, or speaking up for what you believe in, those risks often lead to the most rewarding experiences."
            }
          </p>
        </div>
        <div>
          <h1 className="text-2xl md:text-3x1 lg:text-4xl mt-6 mb-6 font-bold text-blue-950 dark:text-white leading-[2.5rem] md:leading-[3.5rem]">
            {"Welcome back! Please sign in to continue working on Development."}
          </h1>
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

export default Reading;
