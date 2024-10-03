"use client";
import Header from "@/components/Header";
import React, { useEffect } from "react";
import DetailHeader from "../components/DetailHeader";
import { useParams } from "react-router";
import { db } from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import Services from "@/Shared/Services";

function ListingDetail() {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    GetCarDetail();
  }, []);

  const GetCarDetail = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(
        CarImages,
        eq(CarImages, eq(CarListing.id, CarImages.carListingId))
      )
      .where(eq(CarListing.id, id));
    const resp = Services.FormResult(result);
    console.log(resp);
  };
  return (
    <>
      <div>
        <Header />
        <div className="p-10 md:px-20">
          <DetailHeader />
        </div>
      </div>
    </>
  );
}

export default ListingDetail;
