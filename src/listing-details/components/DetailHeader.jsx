import React from "react";
import { RxCalendar } from "react-icons/rx";
function DetailHeader({ carDetail }) {
  return (
    <>
      <h2 className="font-bold text-3xl">{carDetail?.listingTitle}</h2>
      <p className="text-sm">{carDetail?.tagline}</p>
      <div className="flex gap-2 mt-2">
        <div className="flex gap-2 items-center bg-green-50 rounded-full p-2 px-3">
          <RxCalendar className="h-6 w-6 text-primary" />
          <h2 className="text-primary text-md">{carDetail?.year}</h2>
        </div>
        <div className="flex gap-2 items-center bg-green-50 rounded-full p-2 px-3">
          <RxCalendar className="h-6 w-6 text-primary" />
          <h2 className="text-primary text-md">{carDetail?.year}</h2>
        </div>
        <div className="flex gap-2 items-center bg-green-50 rounded-full p-2 px-3">
          <RxCalendar className="h-6 w-6 text-primary" />
          <h2 className="text-primary text-md">{carDetail?.year}</h2>
        </div>
      </div>
    </>
  );
}

export default DetailHeader;
