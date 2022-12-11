import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Navbar = () => {

  const [active, setActive] = useState('a');

  return (
    <nav className="flex justify-evenly items-center m-auto h-12 bg-gray-800 text-gray-300 font-medium text-sm sticky top-0 z-50">
      <div className="max-w-7xl flex space-x-32">
        <div className="ml-32">
          <ul className="flex justify-center items-center space-x-4">
            <Link to="/">
              <li className={`block mt-4 lg:inline-block lg:mt-0 text-white ${active === 'a' ? 'bg-green-500' : 'hover:bg-green-500'} px-4 py-[14px] mr-4`} onClick={() => setActive('a')}>
              
                HOME
              </li>
            </Link>
            <Link to="/about">
              <li className={`block mt-4 lg:inline-block lg:mt-0 text-white ${active === 'b' ? 'bg-green-500' : 'hover:bg-green-500'} px-4 py-[14px] mr-4`} onClick={() => setActive('b')}>
                ABOUT US
              </li>
            </Link>
            {/* <Link to="/online-tuition">
              <li className="flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-[14px]">
                ONLINE TUITION
                <svg
                  class="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
                <ChevronDownIcon className="h-4 pl-1 text-lg " />                
              </li>
            </Link> */}

            <div className="p-0">
              <div className="group/main relative inline-block">
                <Link to="/online-tuition">
                  <div className={`block mt-4 lg:inline-block lg:mt-0 text-white ${active === 'c' ? 'bg-green-500' : 'hover:bg-green-500'} px-4 py-[14px] mr2`} onClick={() => setActive('c')}>
                    <div className="flex items-center justify-center">
                    <span className="mr-1">ONLINE TUITION</span>
                    <svg
                      className="h-4 w-4 fill-current stroke-cyan-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                    </svg>
                    </div>
                  </div>
                </Link>
                <div className="w-max">
                  <ul className="absolute hidden w-full  text-gray-300 group-hover/main:block hover:text-white">
                    <li className="group/item w-full border-t border-gray-300 ">
                      <Link
                        to="/online-tuition"
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4 flex items-center justify-between hover:transition duration-300 ease-in-out tracking-wide"
                      >
                        Class 12
                        <svg
                          className="h-4 w-4 fill-current stroke-cyan-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                          />
                        </svg> */}
                      </Link>
                      <ul className="absolute top-0 left-40 hidden text-gray-300  group-hover/item:block">
                        <Link to="/english">
                          <li className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] px-16 hover:bg-green-500 border-t border-l">
                            English
                          </li>
                        </Link>

                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Maths
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Science
                        </li>
                      </ul>
                    </li>
                    <li className="group/item w-full border-t border-gray-200">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4 flex items-center justify-between"
                        href="#"
                      >
                        Class 11
                        <svg
                          className="h-4 w-4 fill-current stroke-cyan-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                      </a>
                      <ul className="absolute top-10 left-40 hidden text-gray-300  group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] px-16 hover:bg-green-500 border-t border-l"
                          href="#"
                        >
                          English
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Maths
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Science
                        </li>
                      </ul>
                      {/* <ul className="l-0 absolute top-0 left-36 hidden pt-1 text-gray-700 group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          English
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          Maths
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          Science
                        </li>
                      </ul> */}
                    </li>

                    <li className="group/item w-full border-t border-gray-200">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4 flex items-center justify-between"
                        href="#"
                      >
                        Class 10
                        <svg
                          className="h-4 w-4 fill-current stroke-cyan-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                      </a>
                      <ul className="absolute top-20 left-40 hidden text-gray-300  group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] px-16 hover:bg-green-500 border-t border-l"
                          href="#"
                        >
                          English
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Maths
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Science
                        </li>
                      </ul>
                    </li>

                    <li className="group/item w-full border-t border-gray-200">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4 flex items-center justify-between"
                        href="#"
                      >
                        Class 9
                        <svg
                          className="h-4 w-4 fill-current stroke-cyan-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                      </a>
                      <ul className="absolute top-[124px] left-40 hidden text-gray-300  group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] px-16 hover:bg-green-500 border-t border-l"
                          href="#"
                        >
                          English
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Maths
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Science
                        </li>
                      </ul>
                    </li>

                    <li className="group/item w-full border-t border-gray-200">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4 flex items-center justify-between"
                        href="#"
                      >
                        Class 8
                        <svg
                          className="h-4 w-4 fill-current stroke-cyan-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                      </a>
                      <ul className="absolute top-[164px] left-40 hidden text-gray-300  group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] px-16 hover:bg-green-500 border-t border-l"
                          href="#"
                        >
                          English
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Maths
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Science
                        </li>
                      </ul>
                    </li>

                    <li className="group/item w-full border-t border-gray-200">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4 flex items-center justify-between"
                        href="#"
                      >
                        Class 7
                        <svg
                          className="h-4 w-4 fill-current stroke-cyan-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                      </a>
                      <ul className="absolute top-[204px] left-40 hidden text-gray-300  group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] px-16 hover:bg-green-500 border-t border-l"
                          href="#"
                        >
                          English
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Maths
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Science
                        </li>
                      </ul>
                    </li>

                    <li className="group/item w-full border-t border-gray-200">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4 flex items-center justify-between"
                        href="#"
                      >
                        Class 6
                        <svg
                          className="h-4 w-4 fill-current stroke-cyan-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                      </a>
                      <ul className="absolute top-[244px] left-40 hidden text-gray-300  group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] px-16 hover:bg-green-500 border-t border-l"
                          href="#"
                        >
                          English
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Maths
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Science
                        </li>
                      </ul>
                    </li>

                    <li className="group/item w-full border-t border-gray-200">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4 flex items-center justify-between"
                        href="#"
                      >
                        Class 5
                        <svg
                          className="h-4 w-4 fill-current stroke-cyan-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                      </a>
                      <ul className="absolute top-[284px] left-40 hidden text-gray-300  group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] px-16 hover:bg-green-500 border-t border-l"
                          href="#"
                        >
                          English
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Maths
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer bg-gray-800 py-[10px] border-t border-l px-16 hover:bg-green-500"
                          href="#"
                        >
                          Science
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div></div>
                </div>
              </div>
            </div>

            <Link to="/pricing">
              <li className={`block mt-4 lg:inline-block lg:mt-0 text-white ${active === 'd' ? 'bg-green-500' : 'hover:bg-green-500'} px-4 py-[14px] mr-4`} onClick={() => setActive('d')}>
                PRICING
              </li>
            </Link>
            <Link to="/faq">
              <li className={`block mt-4 lg:inline-block lg:mt-0 text-white ${active === 'e' ? 'bg-green-500' : 'hover:bg-green-500'} px-4 py-[14px] mr-4`} onClick={() => setActive('e')}>
                FAQ
              </li>
            </Link>
            <Link to="/contact">
              <li className={`block mt-4 lg:inline-block lg:mt-0 text-white ${active === 'f' ? 'bg-green-500' : 'hover:bg-green-500'} px-4 py-[14px] mr-4`} onClick={() => setActive('f')}>
                CONTACT
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <Link to="/register">
            <p className="cursor-pointer bg-[#F48225] p-[14px] text-gray-50">
              CLICK HERE TO BECOME A TUTOR
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
