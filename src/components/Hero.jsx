import React from "react";
import Search from "./Search";

function Hero() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center p-10 py-20 gap-2 h-[650px] w-full bg-[#000]">
          <h2 className="text-lg">Find cars for sales and for rent near you</h2>
          <h2 className="text-[60px] font-bold">
            <b className="text-white">Find your</b> dream car
          </h2>
          <Search />
          <img src="/car4.png" className="w-[800px]" />
        </div>
      </div>
    </>
  );
}

export default Hero;
