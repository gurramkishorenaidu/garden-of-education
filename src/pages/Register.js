import React from "react";
import register from "../assets/undraw_teaching.svg";
import Slider from "../components/Slider";

const Register = () => {
  return (
    <div className="max-w-[80%] m-auto">
      <div className="text-3xl font-semibold mb-4 text-gray-700 mt-10">
        Become A Tutor
      </div>
      <img src={register} alt="banner" className="h-64 w-full bg-teal-500 p-2" />
      <div className="grid grid-cols-2 gap-x-4 mt-6">
        {/* first div */}
        <div>
          <p className="text-3xl font-semibold mt-4">
            Do you love teaching children and have the required skill
          </p>
          <p className="pt-6">
            Teaching is one of the most respected professions in the world.
            Whether you are a teacher imparting education in school, or a tutor
            providing coaching to students independently, you are a person
            transforming lives. Also, teaching in schools might require longer
            work hours, but tutoring has flexible hours and timings. Due to this
            reason, tutoring attracts people from multiple segments, including
            but not limited to:
          </p>
          <ul className="list-disc pl-6">
            <li className="mt-4">School teachers</li>
            <li className="mt-4">
              People looking for a change in their career
            </li>
            <li className="mt-4">Housewives</li>
            <li className="mt-4">Students pursuing higher education</li>
            <li className="mt-4">
              Elderly people- who have good knowledge of subjects, and want to
              work for part time, etc
            </li>
          </ul>
          <p className="pt-6">Becoming a tutor is easy, but attracting students and making their parents believe, is indeed a challenge.</p>
        </div>
        {/* second div */}
        {/* registration section */}
        <div>
          <section class="bg-gray-50 dark:bg-gray-900">
            <div class="px-6 py-8 mx-auto md:h-screen lg:py-6">
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
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Register with us
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
{/* carousel */}    
        <Slider />    
    </div>
    
  );
};

export default Register;
