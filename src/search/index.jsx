"use client";
import Services from "@/Shared/Services";
import { db } from "../../configs";
import { CarImages, CarListing } from "../../configs/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Search from "@/components/Search";
import CarItem from "@/components/CarItem";

function SearchByOptions() {
  const [searchParam] = useSearchParams();
  const [carList, setCarList] = useState([]);
  const condition = searchParam.get("cars");
  const make = searchParam.get("make");
  const price = searchParam.get("price");

  console.log(condition, make, price);

  useEffect(() => {
    GetCarList();
  }, []);

  const GetCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(condition != undefined && eq(CarListing.condition, condition))
      .where(make != undefined && eq(CarListing.make, make));

    const resp = Services.FormResult(result);
    console.log(resp);
    setCarList(resp);
  };

  return (
    <>
      <div>
        <Header />
        <div></div>
        <div className="p-10 md:px-20">
          <h2 className="font-bold text-4xl">Search Result</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
            {carList?.length > 0 ? (
              carList.map((item, index) => (
                <div key={index}>
                  <CarItem car={item} />
                </div>
              ))
            ) : (
              <div className="text-lg font-semibold text-gray-600">
                No Search Result Found...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchByOptions;
