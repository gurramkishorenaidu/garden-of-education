import React from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Navbar2 = () => {
  return (
    <nav className="flex justify-evenly items-center m-auto h-12 bg-gray-800 text-gray-300 my-8 font-medium text-sm relative top-0 z-50">
      <div className="max-w-7xl flex space-x-32">
        <div className="ml-32">
          <ul className="flex justify-center items-center space-x-4">
            <Link to="/">
              <li className="cursor-pointer hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-[14px]">
                HOME
              </li>
            </Link>
            <Link to="/about">
              <li className="cursor-pointer hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-[14px]">
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
                <div className="inline-flex items-center py-[14px] px-4 font-semibold text-gray-300 hover:bg-green-500 cursor-pointer hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="mr-1">ONLINE TUITION</span>
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                  </svg>
                </div>
                <div className="w-max">
                  <ul className="absolute hidden w-full  text-gray-300 group-hover/main:block">
                    <li className="group/item w-full border-t border-gray-300">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4"
                        href="#"
                      >
                        Class 12
                      </a>
                      <ul className="l-0 absolute top-0 left-36 hidden pt-1 text-gray-700 group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.1
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.2
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.3
                        </li>
                      </ul>
                    </li>
                    <li className="group/item w-full border-t border-gray-200">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4"
                        href="#"
                      >
                        Class 11
                      </a>
                      <ul className="l-0 absolute top-0 left-36 hidden pt-1 text-gray-700 group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.1
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.2
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.3
                        </li>
                      </ul>
                    </li>

                    <li className="group/item w-full border-t border-gray-200">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4"
                        href="#"
                      >
                        Class 10
                      </a>
                      <ul className="l-0 absolute top-0 left-36 hidden pt-1 text-gray-700 group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.1
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.2
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.3
                        </li>
                      </ul>
                    </li>

                    <li className="group/item w-full border-t border-gray-200">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4"
                        href="#"
                      >
                        Class 9
                      </a>
                      <ul className="l-0 absolute top-0 left-36 hidden pt-1 text-gray-700 group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.1
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.2
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.3
                        </li>
                      </ul>
                    </li>

                    <li className="group/item w-full border-t border-gray-200">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4"
                        href="#"
                      >
                        Class 8
                      </a>
                      <ul className="l-0 absolute top-0 left-36 hidden pt-1 text-gray-700 group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.1
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.2
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.3
                        </li>
                      </ul>
                    </li>

                    <li className="group/item w-full border-t border-gray-200">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4"
                        href="#"
                      >
                        Class 7
                      </a>
                      <ul className="l-0 absolute top-0 left-36 hidden pt-1 text-gray-700 group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.1
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.2
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.3
                        </li>
                      </ul>
                    </li>

                    <li className="group/item w-full border-t border-gray-200">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4"
                        href="#"
                      >
                        Class 6
                      </a>
                      <ul className="l-0 absolute top-0 left-36 hidden pt-1 text-gray-700 group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.1
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.2
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.3
                        </li>
                      </ul>
                    </li>

                    <li className="group/item w-full border-t border-gray-200">
                      <a
                        className="whitespace-no-wrap block w-full bg-gray-800 py-[10px] px-4 hover:bg-green-500 pr-4"
                        href="#"
                      >
                        Class 5
                      </a>
                      <ul className="l-0 absolute top-0 left-36 hidden pt-1 text-gray-700 group-hover/item:block">
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.1
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.2
                        </li>
                        <li
                          className="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          1.3
                        </li>
                      </ul>
                    </li>

                    <li class="group/item w-full">
                      <a
                        class="whitespace-no-wrap block w-full rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-800"
                        href="#"
                      >
                        2
                      </a>
                      <ul class="l-0 absolute top-0 left-36 hidden pt-1 text-gray-700 group-hover/item:block">
                        <li
                          class="whitespace-no-wrap mt-10 block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          2.1
                        </li>
                        <li
                          class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          2.2
                        </li>
                        <li
                          class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          2.3
                        </li>
                      </ul>
                    </li>
                    <li class="group/item w-full">
                      <a
                        class="whitespace-no-wrap block w-full rounded-t bg-gray-200 py-2 px-4 hover:bg-gray-400"
                        href="#"
                      >
                        3
                      </a>
                      <ul class="l-0 absolute top-0 left-36 my-10 hidden pt-1 text-gray-700 group-hover/item:block">
                        <li
                          class="whitespace-no-wrap mt-10 block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          3.1
                        </li>
                        <li
                          class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          3.2
                        </li>
                        <li
                          class="whitespace-no-wrap block w-full cursor-pointer rounded-t bg-gray-200 py-2 px-16 hover:bg-gray-400"
                          href="#"
                        >
                          3.3
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div></div>
                </div>
              </div>
            </div>

            <Link to="/pricing">
              <li className="cursor-pointer hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-[14px]">
                PRICING
              </li>
            </Link>
            <Link to="/faq">
              <li className="cursor-pointer hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-[14px]">
                FAQ
              </li>
            </Link>
            <Link to="/contact">
              <li className="cursor-pointer hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-[14px]">
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

export default Navbar2;
