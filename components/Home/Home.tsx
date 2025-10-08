import React from "react";
import Hero from "./Hero";
import About from "./About";
import Benefits from "./Benefits";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Benefits />
    </div>
  );
};

export default Home;
