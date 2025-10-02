import React from "react";

const Benefits = () => {
  return (
    <div className="relative w-full h-screen flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* text content */}
        <div>
          <h1>Benefits</h1>
          <p>
            {
              "Welcome to our website! We're excited to share our story with you."
            }
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
