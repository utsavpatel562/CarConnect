import React from "react";
import Search from "./Search";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function Hero() {
  const words = [
    {
      text: "Find Your ",
      className: "text-slate-700 gap-2",
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
              "radial-gradient(circle, #e1e5e9, #dee4ed, #dde3f1, #dde1f5, #e0dff8)",
          }}
        >
          <h2 className="text-lg text-slate-700">
            Find cars for sales and for rent near you
          </h2>
          <h2 className="text-[60px] font-bold">
            <TypewriterEffectSmooth words={words} />
          </h2>
          <Search />
          <img src="/car1.png" className="w-[1050px] mt-10" />
        </div>
      </div>
    </>
  );
}

export default Hero;
