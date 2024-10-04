import React from "react";
import { FaCheck } from "react-icons/fa6";

function Features({ features }) {
  return (
    <>
      <div className="mt-6">
        <div className="p-5 bg-white rounded-xl border shadow-md">
          <h2 className="font-medium text-2xl">Features</h2>
          <div>
            {Object.entries(features).map(([features, value]) => (
              <div>
                {features} - {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
