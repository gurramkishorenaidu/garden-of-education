import React from "react";
import logo from "../assets/God.png";
import { NavLink } from "react-router-dom";

const Navbar1 = () => {
  return (
    <nav className="bg-gray-50  dark:bg-gray-800 flex flex-row items-center justify-center pl-16 sticky top-0 z-20">
      
      {/* <div className="h-14 w-14"><img src={logo} alt="banner" /></div> */}
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <NavLink
          to="/"
          className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-teal-500 mx-1.5 sm:mx-6"
        >
          home
        </NavLink>

        <NavLink
          to="about"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          About Us
        </NavLink>

        <NavLink
          to="online-tuition"
          className="border-b-2 animate-pulse border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Online Tuition
        </NavLink>

        <NavLink
          to="pricing"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Pricing
        </NavLink>
        <NavLink
          to="faq"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          FAQ
        </NavLink>
        <NavLink
          to="contact"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar1;
