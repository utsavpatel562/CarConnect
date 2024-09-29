import React, { useEffect, useState } from "react";
import FakeData from "@/Shared/FakeData";
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { db } from "../../configs";
import { CarImages, CarListing } from "../../configs/schema";
import { desc, eq } from "drizzle-orm";
import Services from "@/Shared/Services";

const MostSearchedCar = () => {
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
    console.log(resp);
    setCarList(resp);
  };

  return (
    <>
      <div className="mx-4 sm:mx-8 lg:mx-24">
        <h2 className="font-extrabold text-2xl sm:text-3xl text-center mt-8 sm:mt-16 mb-5 sm:mb-7">
          Most Searched Cars
        </h2>
        <Carousel>
          <CarouselContent>
            {carList.map((car, index) => (
              <CarouselItem key={index} className="sm:basis-1/1 lg:basis-1/4">
                <CarItem car={car} key={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default MostSearchedCar;
