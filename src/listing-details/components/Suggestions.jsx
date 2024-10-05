import Services from "@/Shared/Services";
import { db } from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import CarItem from "@/components/CarItem";
import { Link } from "react-router-dom";
import { PiArrowUpRightBold } from "react-icons/pi";

const Suggestions = () => {
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    GetPopularCarList();
  }, []);

  const GetPopularCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .orderBy(desc(CarListing.id))
      .limit(4);

    const resp = Services.FormResult(result);
    setCarList(resp);
  };

  return (
    <>
      <div className="flex justify-between items-center mt-9 mb-5">
        <h2 className="font-bold text-2xl">Suggestion for you</h2>
        <Link
          className="flex text-primary font-medium items-center gap-1"
          to={"/newMenu"}
        >
          View all <PiArrowUpRightBold className="w-4 h-4" />
        </Link>
      </div>
      {/* Handle empty car list */}
      {carList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {carList.map((car, index) => (
            <div key={index}>
              <CarItem car={car} />
            </div>
          ))}
        </div>
      ) : (
        <p>No Cars Available</p>
      )}
    </>
  );
};

export default Suggestions;
