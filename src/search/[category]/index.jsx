import Header from "@/components/Header";
import Search from "@/components/Search";
import { db } from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Services from "@/Shared/Services";
import CarItem from "@/components/CarItem";

function SearchByCategory() {
  const { category } = useParams();
  const [carList, setCarList] = useState([]);
  console.log(category);

  useEffect(() => {
    GetCarList();
  }, []);

  const GetCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.category, category));

    const resp = Services.FormResult(result);
    setCarList(resp);
  };

  return (
    <>
      <div>
        <Header />
        <div
          className="p-10 flex justify-center"
          style={{
            background:
              "radial-gradient(circle, #e1e5e9, #dee4ed, #dde3f1, #dde1f5, #e0dff8)",
          }}
        >
          <Search />
        </div>
        <div className="p-10 md:px-20">
          <h2 className="font-bold text-4xl">{category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
            {carList?.length > 0 ? (
              carList.map((item, index) => (
                <div key={index}>
                  <CarItem car={item} />
                </div>
              ))
            ) : (
              <div className="text-lg font-semibold text-gray-600">
                No listing for {category} currently.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchByCategory;
