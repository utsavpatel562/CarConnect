import React from "react";
import Search from "./Search";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function Hero() {
  const words = [
    {
      text: "Find Your ",
      className: "text-slate-200 gap-2",
    },
    {
      text: ".",
      className: "text-transparent",
    },
    {
      text: "Dream Car !",
      className: "gap-2 text-[#54b342] dark:text-blue-500",
    },
  ];
  return (
    <>
      <div>
        <div
          className="flex flex-col items-center p-10 py-20 gap-2 h-[650px] w-full"
          style={{
            background:
              "linear-gradient(to top, #1f1f20, #191e23, #0d1f22, #051f1a, #0b1d0b)",
          }}
        >
          <h2 className="text-lg text-slate-200">
            Find cars for sales and for rent near you
          </h2>
          <h2 className="text-[60px] font-bold">
            <TypewriterEffectSmooth words={words} />
          </h2>
          <Search />
          <img src="/car1.png" className="w-[950px]" />
        </div>
      </div>
    </>
  );
}

export default Hero;
