import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../configs";
import { CarImages, CarListing } from "../../../configs/schema";
import { desc, eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import Services from "@/Shared/Services";
import CarItem from "@/components/CarItem";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

function MyListing() {
  const { user } = useUser();
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    user && GetUserCarListing();
  }, [user]);
  const GetUserCarListing = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .leftJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.createdBy, user?.primaryEmailAddress.emailAddress))
      .orderBy(desc(CarListing.id));

    const resp = Services.FormResult(result);
    console.log(resp);
    setCarList(resp);
  };
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-4xl">My Listing</h2>
          <Link to={"/add-listing"}>
            <Button>+ Add New Listing</Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-5">
          {carList.map((item, index) => (
            <div key={index}>
              <CarItem car={item} />
              <div className="flex gap-2 mt-3">
                <Button className="flex items-center gap-1 p-5 bg-gray-700 hover:bg-gray-800 w-full">
                  Edit Post
                  <FiEdit />
                </Button>
                <Button className="flex items-center p-5 bg-red-600 hover:bg-red-700">
                  <FaRegTrashAlt />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyListing;
