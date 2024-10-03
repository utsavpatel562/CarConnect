import React from "react";
import { RxCalendar } from "react-icons/rx";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { LuFuel } from "react-icons/lu";
function DetailHeader({ carDetail }) {
  return (
    <>
      <h2 className="font-bold text-3xl">{carDetail?.listingTitle}</h2>
      <p className="text-md">{carDetail?.tagline}</p>
      <div className="flex gap-2 mt-3">
        <div className="flex gap-2 items-center bg-green-50 rounded-full p-2 px-3 w-[110px] justify-center shadow-md">
          <RxCalendar className="h-5 w-5 text-primary" />
          <h2 className="text-primary text-md">{carDetail?.year}</h2>
        </div>
        <div className="flex gap-2 items-center bg-green-50 rounded-full p-2 px-3 w-[110px] justify-center shadow-md">
          <SlSpeedometer className="h-5 w-5 text-primary" />
          <h2 className="text-primary text-md">{carDetail?.mileage}</h2>
        </div>
        <div className="flex gap-2 items-center bg-green-50 rounded-full p-2 px-3 w-[110px] justify-center shadow-md">
          <GiGearStickPattern className="h-5 w-5 text-primary" />
          <h2 className="text-primary text-md">{carDetail?.transmission}</h2>
        </div>
        <div className="flex gap-2 items-center bg-green-50 rounded-full p-2 px-3 w-[110px] justify-center shadow-md">
          <LuFuel className="h-5 w-5 text-primary" />
          <h2 className="text-primary text-md">{carDetail?.fuelType}</h2>
        </div>
      </div>
    </>
  );
}

export default DetailHeader;
