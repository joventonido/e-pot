import React from "react";
import Logo from "../Helper/Logo";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16 dark:bg-gray-950">
      <div className="w-4/5 mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 items-start">
        {/* 1st part */}
        <div>
          <Logo />
          <p className="mt-5 font-semibold text-gray-700 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            iusto quos quae! Inventore, rem doloremque?
          </p>
          {/* social icons */}
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>
        {/* 2nd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>

          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            About Us
          </p>

          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Services
          </p>

          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Our Customer
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blogs
          </p>
        </div>
        {/* 3rd part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Resources</h1>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Blog
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Events
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Podcast
          </p>
          <p className="text-gray-800 dark:text-gray-400 font-medium cursor-pointer text-sm hover:text-blue-950">
            Guides
          </p>
        </div>
        {/* 4th part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600 dark:text-gray-300">
              Our Mobile Number
            </h1>
            <h1 className="text-base font-bold text-blue-950 dark:text-gray-300 mt-1">
              +12343 54567
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600 dark:text-gray-300">
              Our Email
            </h1>
            <h1 className="text-base font-bold text-blue-950 dark:text-gray-300 mt-1">
              example@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="text-center md:text-left">
          Copyright © 2025 Webdev. All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social :</span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaFacebookF />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaTwitter />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaYoutube />
          </span>
          <span className="text-gray-500 hover:text-gray-800">
            <FaLinkedin />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
