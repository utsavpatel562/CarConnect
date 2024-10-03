"use client";
import Services from "@/Shared/Services";
import { db } from "../../configs";
import { CarImages, CarListing } from "../../configs/schema";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function SearchByOptions() {
  const [searchParam] = useSearchParams();
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
  };

  return (
    <>
      <div>SeachByOptions</div>
    </>
  );
}

export default SearchByOptions;
