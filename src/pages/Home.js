import React from "react";
import Slider from "../components/Slider";
import image from "../assets/undraw_teaching.svg";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-green-100 pt-16 pl-6">
          <img src={image} alt="banner" />
        </div>
        <div>
          <section class="bg-green-100 dark:bg-gray-900">
            <div class="px-6 py-8 mx-auto md:h-screen lg:py-10">
              {/* <a
              href="#"
              class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                class="w-8 h-8 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
              />
              Flowbite
            </a> */}
              <div class="w-full bg-white rounded-sm shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ml-32">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8 shadow place-items-center">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                    Sign up now for the FREE DISCOVER PROGRAM!
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                      <input
                        type="text"
                        name="Mobile Number"
                        id="password"
                        placeholder="Full Name"
                        class="border border-teal-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                        required=""
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="Mobile Number"
                        id="password"
                        placeholder="Mobile Number"
                        class="border border-teal-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                        required=""
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="Mobile Number"
                        id="password"
                        placeholder="Your Email"
                        class=" border border-teal-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                        required=""
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="Mobile Number"
                        id="password"
                        placeholder="Location"
                        class="border border-teal-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                        required=""
                      />
                    </div>

                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="py-2 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-teal-500 rounded-sm"
                        aria-describedby="message-max"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-start">
                      <button
                        type="submit"
                        className="mt-1 w-full inline-flex items-center justify-center px-6 py-1 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Slider />
    </>
  );
};

export default Home;
