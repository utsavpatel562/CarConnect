import React from "react";
import Search from "./Search";

function Hero() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center p-10 py-20 gap-2 h-[600px] w-full bg-[#eef0fc]">
          <h2 className="text-lg">Find cars for sales and for rent near you</h2>
          <h2 className="text-[60px] font-bold">Find your dream car</h2>
          <Search />
        </div>
      </div>
    </>
  );
}

export default Hero;
