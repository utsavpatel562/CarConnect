import React from "react";
import { RxCalendar } from "react-icons/rx";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { LuFuel } from "react-icons/lu";

function DetailHeader({ carDetail }) {
  return (
    <>
      {carDetail?.listingTitle ? (
        <div>
          <h2 className="font-bold text-2xl sm:text-3xl">
            {carDetail?.listingTitle}
          </h2>
          <p className="text-sm sm:text-md">{carDetail?.tagline}</p>
          <div className="flex flex-wrap gap-3 mt-3">
            <div className="flex gap-2 items-center bg-green-50 rounded-full p-2 px-3 w-[100px] sm:w-[110px] justify-center shadow-md border border-green-300">
              <RxCalendar className="h-5 w-5 text-primary" />
              <h2 className="text-primary text-sm sm:text-md">
                {carDetail?.year}
              </h2>
            </div>
            <div className="flex gap-2 items-center bg-green-50 rounded-full p-2 px-3 w-[100px] sm:w-[110px] justify-center shadow-md border border-green-300">
              <SlSpeedometer className="h-5 w-5 text-primary" />
              <h2 className="text-primary text-sm sm:text-md">
                {carDetail?.mileage}
              </h2>
            </div>
            <div className="flex gap-2 items-center bg-green-50 rounded-full p-2 px-3 w-[100px] sm:w-[110px] justify-center shadow-md border border-green-300">
              <GiGearStickPattern className="h-5 w-5 text-primary" />
              <h2 className="text-primary text-sm sm:text-md">
                {carDetail?.transmission}
              </h2>
            </div>
            <div className="flex gap-2 items-center bg-green-50 rounded-full p-2 px-3 w-[100px] sm:w-[110px] justify-center shadow-md border border-green-300">
              <LuFuel className="h-5 w-5 text-primary" />
              <h2 className="text-primary text-sm sm:text-md">
                {carDetail?.fuelType}
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full rounded-xl h-[100px] bg-slate-200 animate-pulse"></div>
      )}
    </>
  );
}

export default DetailHeader;
