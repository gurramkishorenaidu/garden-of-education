import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";



export default function TopNavbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-gray-800 flex justify-between items-center sticky top-0 z-20 border-b border-gray-400"
     
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-12 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start br br-2">
                <div className="flex flex-shrink-0 items-end">
                  {/* <img
                    className="block h-8 w-28 lg:hidden"
                    // src="https://res.cloudinary.com/dwtumnk08/image/upload/v1670314805/GodLogo_moa4xt.jpg"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-28 lg:block"
                    // src="https://res.cloudinary.com/dwtumnk08/image/upload/v1670314805/GodLogo_moa4xt.jpg"
                    alt="Your Company"
                   
                  /> */}
                  <div className="flex justify-end items-center animate-bounce">
                   <p className="text-white">9030030385</p>
                   <p className="text-white ml-8">info@gardenofeducation.com</p>
                   </div>
                </div>
                
              </div>
            </div>
          </div>
          

          
          
        </>
      )}
    </Disclosure>
  );
}

