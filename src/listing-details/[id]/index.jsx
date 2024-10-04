"use client";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import DetailHeader from "../components/DetailHeader";
import { useParams } from "react-router";
import { db } from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import Services from "@/Shared/Services";
import ImageGallery from "../components/ImageGallery";
import Description from "../components/Description";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Specification from "../components/Specification";

function ListingDetail() {
  const { id } = useParams();
  const [carDetail, setCarDetail] = useState();

  useEffect(() => {
    GetCarDetail();
  }, []);

  const GetCarDetail = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarImages.carListingId, CarListing.id))
      .where(eq(CarListing.id, id));

    const resp = Services.FormResult(result);
    setCarDetail(resp[0]);
  };
  return (
    <>
      <div>
        <Header />
        <div className="p-10 md:px-20">
          <DetailHeader carDetail={carDetail} />
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 mt-8">
            <div className="md:col-span-2">
              <ImageGallery carDetail={carDetail} />
              <Description carDetail={carDetail} />
              <Features features={carDetail?.features} />
            </div>
            <div>
              <Pricing carDetail={carDetail} />
              <Specification carDetail={carDetail} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListingDetail;
