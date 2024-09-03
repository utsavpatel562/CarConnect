import React from "react";
import FakeData from "@/Shared/FakeData";
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MostSearchedCar = () => {
  console.log(FakeData.carList);
  return (
    <>
      <div className="mx-24">
        <h2 className="font-extrabold text-3xl text-center my-14">
          Most Searched Cars
        </h2>
        <Carousel>
          <CarouselContent>
            {FakeData.carList.map((car, index) => (
              <CarouselItem className="basis-1/4">
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
