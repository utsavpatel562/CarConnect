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
import Footer from "@/components/Footer";

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
        <div className="p-4 md:p-10 lg:px-20">
          <h2 className="font-bold text-2xl md:text-4xl">Search Result</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {carList?.length > 0 ? (
              carList.map((item, index) => (
                <div key={index}>
                  <CarItem car={item} />
                </div>
              ))
            ) : (
              <div className="text-lg font-semibold text-gray-600 col-span-full text-center">
                No Search Result Found...
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SearchByOptions;
