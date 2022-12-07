import React from "react";

export default function Pricing() {
  return (
    <div className="h-full flex flex-col ">
            <div className="bg-gray-50 flex flex-col items-center justify-center py-8 md:py-20 lg:py-12 px-4 md:px-0">
                
                <button id="toggleButton" aria-label="Toggle Monthly/Yearly." className="bg-gray-50 shadow rounded-full flex items-center mt-7 md:mt-9 lg:mt-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-500 focus:ring-white">
                    <div className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 focus:outline-none text-base leading-none rounded-full py-4 px-4 md:py-4 md:px-6 mr-1" id="monthly">Monthly</div>
                    <div className="focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 focus:outline-none text-base leading-none rounded-full py-4 px-4 md:py-4 md:px-6" id="annually">Yearly</div>
                </button>
            </div>
            <div role="list" aria-label="Packages" className=" max-w-[80%] bg-transparent grid grid-cols-1 lg:grid-cols-4 gap-6 container mx-auto -mt-10 md:-mt-16 lg:-mt-20 px-4 md:px-28 lg:px-0">
                <div role="listitem" className="px-6 pt-10 pb-6 bg-white rounded shadow-lg">
                    <h1 className="text-2xl font-medium leading-normal text-gray-600">Grades 1,2,3</h1>
                    <p className="font-semibold text-gray-800 mt-7 md:mt-8"><span className="text-4xl">&#8377; 1,000</span>/ month</p>
                    <p className="text-base leading-normal text-gray-600 mt-6">For businesses that want to optimize sales</p>
                    <div role="list" aria-label="Facilities" className="mt-6 md:mt-8">
                        <div role="listitem" className="flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#008080" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-gray-600">All limited links</p>
                        </div>
                        <div role="listitem" className="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#008080" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-gray-600">Personal Analytics Platform</p>
                        </div>
                        <div role="listitem" className="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#008080" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-gray-600">Chat Support</p>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-28 md:pt-2 max-w-[80%] m-auto">
                        <button className="flex w-full items-center justify-center border rounded border-teal-700 text-base font-medium text-white py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 hover:bg-teal-700 hover:text-white bg-gradient-to-b from-teal-500 to-teal-600">Book Now</button>
                    </div>
                </div>
                <div role="listitem" className="px-6 pt-10 pb-6 bg-gradient-to-b from-teal-500 to-teal-600 rounded shadow-md">
                    <h1 className="text-2xl font-medium leading-normal text-white">Grades 4,5,6,7,8</h1>
                    <p className="font-semibold text-white mt-7 md:mt-8"><span className="text-4xl">&#8377; 2,000</span>/ month</p>
                    <p className="text-base leading-normal text-white mt-6">For businesses that want to optimize sales</p>
                    <div role="list" aria-label="Facilities" className="mt-6 md:mt-8">
                        <div role="listitem" className="flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="white" />
                                <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-white">All limited links</p>
                        </div>
                        <div role="listitem" className="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="white" />
                                <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-white">Personal Analytics Platform</p>
                        </div>
                        <div role="listitem" className="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="white" />
                                <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-white">Chat Support</p>
                        </div>
                        <div role="listitem" className="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="white" />
                                <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-white">Optimized Tracking</p>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-20 max-w-[80%] m-auto">
                        <button className="flex w-full items-center justify-center rounded bg-white text-base font-medium text-teal-700 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white hover:bg-teal-600 hover:text-white">Book Now</button>
                    </div>
                </div>
                <div role="listitem" className="px-6 pt-10 pb-6 bg-white rounded shadow-md">
                    <h1 className="text-2xl font-medium leading-normal text-gray-600">Grades 9,10</h1>
                    <p className="font-semibold text-gray-800 mt-7 md:mt-8"><span className="text-4xl">&#8377; 3,000</span>/ month</p>
                    <p className="text-base leading-normal text-gray-600 mt-6">For businesses that want to optimize sales</p>
                    <div role="list" aria-label="Facilities" className="mt-6 md:mt-8">
                        <div role="listitem" className="flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#008080" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-gray-600">All limited links</p>
                        </div>
                        <div role="listitem" className="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#008080" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-gray-600">Personal Analytics Platform</p>
                        </div>
                        <div role="listitem" className="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#008080" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-gray-600">Chat Support</p>
                        </div>
                        <div role="listitem" className="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#008080" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-gray-600">Optimized Tracking</p>
                        </div>
                        <div role="listitem" className="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#008080" />
                                <path d="M5.66638 7.99931L7.33305 9.66598L10.6664 6.33264" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-gray-600">20+ users at the go</p>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-10 max-w-[80%] m-auto">
                        <button className="flex w-full items-center justify-center border rounded border-teal-700 text-base font-medium text-white py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-700 hover:bg-teal-700 hover:text-white bg-gradient-to-b from-teal-500 to-teal-600">Book Now</button>
                    </div>
                </div>
                <div role="listitem" className="px-6 pt-10 pb-6 bg-gradient-to-b from-teal-500 to-teal-600 rounded shadow-md">
                    <h1 className="text-2xl font-medium leading-normal text-white">Grades 11,12</h1>
                    <p className="font-semibold text-white mt-7 md:mt-8"><span className="text-4xl">&#8377; 4,000</span>/ month</p>
                    <p className="text-base leading-normal text-white mt-6">For businesses that want to optimize sales</p>
                    <div role="list" aria-label="Facilities" className="mt-6 md:mt-8">
                        <div role="listitem" className="flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="white" />
                                <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-white">All limited links</p>
                        </div>
                        <div role="listitem" className="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="white" />
                                <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-white">Personal Analytics Platform</p>
                        </div>
                        <div role="listitem" className="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="white" />
                                <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-white">Chat Support</p>
                        </div>
                        <div role="listitem" className="mt-6 flex items-center space-x-4">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="white" />
                                <path d="M5.66632 7.99931L7.33299 9.66598L10.6663 6.33264" stroke="#4338CA" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="text-base leading-none text-white">Optimized Tracking</p>
                        </div>
                    </div>
                    <div className="mt-12 md:mt-20 max-w-[80%] m-auto">
                        <button className="flex w-full items-center justify-center rounded bg-white text-base font-medium text-teal-700 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-700 focus:ring-white hover:bg-teal-600 hover:text-white ">Book Now</button>
                    </div>
                </div>
            </div>
        </div> 
  );
}

