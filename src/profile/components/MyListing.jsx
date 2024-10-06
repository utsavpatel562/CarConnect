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

  const handleDelete = async (id) => {
    try {
      await db.delete(CarImages).where(eq(CarImages.carListingId, id));
      await db.delete(CarListing).where(eq(CarListing.id, id));
      GetUserCarListing();
    } catch (error) {
      console.error("Failed to delete listing", error);
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
          <h2 className="font-bold text-2xl sm:text-4xl">My Listing</h2>
          <Link to={"/add-listing"}>
            <Button className="mt-3 sm:mt-0">+ Add New Listing</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
          {carList.map((item, index) => (
            <div key={index}>
              <CarItem car={item} />
              <div className="flex gap-2 mt-3">
                <Link
                  to={"/add-listing?mode=edit&id=" + item?.id}
                  className="w-full"
                >
                  <Button className="flex items-center justify-center gap-1 p-3 sm:p-5 bg-gray-700 hover:bg-gray-800 w-full text-sm sm:text-base">
                    Edit Post
                    <FiEdit />
                  </Button>
                </Link>
                <Button
                  className="flex items-center justify-center gap-1 p-3 sm:p-5 bg-red-600 hover:bg-red-700 w-full text-sm sm:text-base"
                  onClick={() => handleDelete(item?.id)}
                >
                  Move to Trash
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
