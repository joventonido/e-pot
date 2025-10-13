import React from "react";
import Hero from "./Hero";
import About from "./About";
import Benefits from "./Benefits";
import BestSelling from "./BestSelling/BestSelling";
import Price from "./Price/Price";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Benefits />
      <BestSelling />
      <Price />
      <Review />
    </div>
  );
};

export default Home;
