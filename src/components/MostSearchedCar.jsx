import React from "react";
import FakeData from "@/Shared/FakeData";

const MostSearchedCar = () => {
  console.log(FakeData.carList);
  return (
    <>
      <div className="font-extrabold text-3xl text-center my-14">
        Most Searched Cars
      </div>
    </>
  );
};

export default MostSearchedCar;
