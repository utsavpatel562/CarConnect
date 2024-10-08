// Code by Utsav Patel
import Data from "@/Shared/Data";
import React from "react";
import { Link } from "react-router-dom";

function Catetory() {
  return (
    <>
      <div className="mt-40" id="searchbytype">
        <h2 className="text-3xl text-center mb-6 font-extrabold">
          Browse By Type
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 px-20">
          {Data.Cateory.map((category, index) => (
            <Link to={"search/" + category.name}>
              <div className="flex flex-col border rounded-xl p-3 items-center hover:shadow-md cursor-pointer justify-center">
                <img src={category.icon} width={40} height={40} />
                <h2 className="mt-2">{category.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Catetory;
