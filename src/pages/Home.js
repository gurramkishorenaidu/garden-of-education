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
            <div class="px-6 py-8 mx-auto md:h-screen lg:py-12">
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
              <div class="w-[70%] bg-white rounded-sm shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ml-32">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 shadow place-items-center">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                    Sign up now for the FREE DISCOVER PROGRAM!
                  </h1>
                  <form class="space-y-4 md:space-y-4" action="#">
                    <div>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Choose Grade</option>
                        <option value="US">12</option>
                        <option value="CA">11</option>
                        <option value="FR">10</option>
                        <option value="DE">9</option>
                        <option value="DE">8</option>
                        <option value="DE">7</option>
                        <option value="DE">6</option>
                        <option value="DE">5</option>
                        <option value="DE">4</option>
                        <option value="DE">3</option>
                        <option value="DE">2</option>
                        <option value="DE">1</option>
                      </select>
                      {/* <input
                        type="number"
                        name="Mobile Number"
                        id="password"
                        placeholder="Choose Grade"
                        class="border border-teal-300 text-gray-900 sm:text-sm rounded-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                        required=""
                      /> */}
                    </div>
                    <div>
                      <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Choose Curriculum</option>
                        <option value="US">CBSE</option>
                        <option value="CA">ICSE</option>
                        <option value="FR">State Board</option>
                        <option value="DE">Others</option>
                      </select>
                    </div>
                    {/* Full Name */}
                    <input
                      type="text"
                      // id="input-group-1"
                      className="bg-gray-50 border border-gray-300 text-warm-gray-900 text-sm focus:ring-green-500 focus:border-green-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-green-500"
                      placeholder="Full Name"
                    />
                     {/* mobile number */}
                     <div className="grid grid-cols-10 space-x-1">
                      <div className="col-span-2 text-center">
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          disabled
                        >
                          <option value="US">+91</option>
                        </select>
                      </div>
                      <div className="col-span-8 text-left">
                        <input
                          type="text"
                          id="input-group-1"
                          className="bg-gray-50 border border-gray-300 text-warm-gray-900 text-sm focus:ring-green-500 focus:border-green-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-green-500"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                    {/* email field */}
                    <div>
                      <div class="relative mb-6">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="input-group-1"
                          class="bg-gray-50 border border-gray-300 text-warm-gray-900 text-sm focus:ring-green-500 focus:border-green-500 block w-full pl-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-green-500"
                          placeholder="name@email.com"
                        />
                      </div>
                    </div>
                   

                    <div className="mt-2">
                      <textarea
                        id="message"
                        name="message"
                        rows={2}
                        className="py-2 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-teal-500 rounded-sm"
                        aria-describedby="message-max"
                        placeholder="Remarks"
                        defaultValue={""}
                      />
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-start">
                      <button
                        type="submit"
                        className="mt-2 mb-2 w-full inline-flex items-center justify-center px-6 py-1 border border-transparent shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
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
