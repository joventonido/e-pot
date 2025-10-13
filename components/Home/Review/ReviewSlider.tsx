"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ReviewSlider = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      <ReviewCard
        name="Jane Smith"
        role="Teacher"
        image="/images/teacher.jpg"
      />
      <ReviewCard
        name="John Doe"
        role="Developer"
        image="/images/developer.jpg"
      />
      <ReviewCard name="Josh Test" role="Police" image="/images/police.jpg" />
      <ReviewCard name="Jane Doe" role="Doctor" image="/images/doctor.jpg" />
      <ReviewCard
        name="Bert Doe"
        role="Developer"
        image="/images/developer.jpg"
      />
      <ReviewCard
        name="Johnny Test"
        role="Developer"
        image="/images/developer.jpg"
      />
    </Carousel>
  );
};

export default ReviewSlider;
