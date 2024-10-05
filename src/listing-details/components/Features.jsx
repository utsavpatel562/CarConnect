import React from "react";
import { FaCheck } from "react-icons/fa6";

function Features({ features = {} }) {
  return (
    <>
      <div className="mt-6">
        <div className="p-6 md:p-8 bg-white rounded-xl border shadow-md">
          <h2 className="font-medium text-xl md:text-2xl">Features</h2>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
            {Object.entries(features).map(([feature, value], index) => (
              <div key={index} className="flex gap-2 items-center">
                <FaCheck className="text-md md:text-lg p-1 rounded-full bg-green-100 text-primary" />
                <h2 className="text-sm md:text-base">{feature}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
