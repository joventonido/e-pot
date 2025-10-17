"use client";

import React, { useEffect, useState } from "react";

// const ScrollToTop = () => {
//   return <div>ScrollToTop</div>;
// };

// export default ScrollToTop;
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 animate-pulse right-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none"
          aria-label="Scroll to top"
        >
          {/* Using an inline SVG icon (equivalent to FaArrowUp) to fix the compilation error */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
