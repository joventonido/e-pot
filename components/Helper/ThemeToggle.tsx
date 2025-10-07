"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set to true only after the component mounts on the client
  }, []);

  if (!mounted) return null; //Prevent hydration mismatch
  //   if (!mounted) {
  //     return (
  //       <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition">
  //         {/* Temporary icon placeholder to match SSR structure */}
  //         <BiMoon className="text-yellow-400 w-6 h-6 opacity-50" />
  //       </button>
  //     );
  //   }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-300 transition"
    >
      {currentTheme === "dark" ? (
        <BiSun className="text-yellow-400 w-6 h-6" />
      ) : (
        <BiMoon className="text-yellow-400 w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
