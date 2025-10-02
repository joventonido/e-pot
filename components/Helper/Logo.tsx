import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-col"></div>
      <h1 className="text-xl hidden sm:block md:text-2xl font-semibold">
        E-<span className="text-orange-600">Pot</span>
      </h1>
    </div>
  );
};

export default Logo;
