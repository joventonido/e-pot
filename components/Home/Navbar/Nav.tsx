"use client"; // Needed for usePathname() in App Router

import Logo from "@/components/Helper/Logo";
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="transition-all duration-200 h-[12vh] z-[100] fixed w-full">
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* LOGO */}
        <Logo />
        {/* NAVLINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.url;

            return (
              <Link
                href={link.url}
                key={link.id}
                className={`font-semibold transition-all duration-200 
                  ${
                    isActive
                      ? "text-orange-500 dark:text-orange-500"
                      : "text-gray-800 dark:text-white hover:text-orange-500 dark:hover:text-orange-500"
                  }`}
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nav;
