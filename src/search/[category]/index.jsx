import Header from "@/components/Header";
import Search from "@/components/Search";
import { db } from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import Services from "@/Shared/Services";

function SearchByCategory() {
  const { category } = useParams();
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
    console.log(resp);
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
        <div>
          <h2 className="font-bold text-4xl p-10 md:px-20">{category}</h2>
        </div>
      </div>
    </>
  );
}

export default SearchByCategory;
