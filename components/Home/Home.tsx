import React from "react";
import Hero from "./Hero";
import About from "./About";
import Benefits from "./Benefits";
import BestSelling from "./BestSelling/BestSelling";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Benefits />
      <BestSelling />
    </div>
  );
};

export default Home;
