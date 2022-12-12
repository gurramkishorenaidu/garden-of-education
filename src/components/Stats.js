import React from "react";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <div className="bg-gray-50">
      {/* <CountUp start={0} end={10000} duration={15} suffix="+" className="text-green-500" /> */}

      <dl className="mt-0 grid grid-cols-1 sm:grid-cols-3">
        <div className="px-4 py-5 bg-gray-50 shadow overflow-hidden sm:p-4 text-center">
          <dt className="text-sm font-medium text-gray-500 truncate">
            No of Students
          </dt>
          <CountUp
            start={0}
            end={10000}
            duration={5}
            suffix="+"
            className="mt-1 text-3xl font-semibold text-green-500"
          />
        </div>
        <div className="px-4 py-5 bg-gray-50 shadow overflow-hidden sm:p-4 text-center">
          <dt className="text-sm font-medium text-gray-500 truncate">
            Total Teaching Experience
          </dt>
          <CountUp
            start={0}
            end={20}
            duration={5.1}
            suffix="+"
            className="mt-1 text-3xl font-semibold text-green-500"
          />
        </div>
        <div className="px-4 py-5 bg-gray-50 shadow overflow-hidden sm:p-4 text-center">
          <dt className="text-sm font-medium text-gray-500 truncate">
            No of Students
          </dt>
          <CountUp
            start={0}
            end={10000}
            duration={5}
            suffix="+"
            className="mt-1 text-3xl font-semibold text-green-500"
          />
        </div>
      </dl>
    </div>
  );
}
