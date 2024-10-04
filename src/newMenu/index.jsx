import Header from "@/components/Header";
import { CarImages, CarListing } from "../../configs/schema";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { db } from "../../configs";
import Services from "@/Shared/Services";
import CarItem from "@/components/CarItem";

const New = () => {
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
      .limit(10);

    const resp = Services.FormResult(result);
    setCarList(resp);
  };

  return (
    <>
      <Header />
      <div className="mx-4 sm:mx-8 lg:mx-24 mb-10">
        <h2 className="font-bold text-3xl my-6">New Posting</h2>
        {/* Handle empty car list */}
        {carList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {carList.map((car, index) => (
              <div key={index} className="">
                <p className="bg-blue-100 mb-2 rounded-md p-2 text-center">
                  Posted on: {car.postedOn}
                </p>
                <CarItem car={car} />
              </div>
            ))}
          </div>
        ) : (
          <p>No Cars Available</p>
        )}
      </div>
    </>
  );
};

export default New;
