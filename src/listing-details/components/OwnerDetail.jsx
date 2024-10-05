import { Button } from "@/components/ui/button";
import React from "react";
import { IoSend } from "react-icons/io5";

function OwnerDetail({ carDetail }) {
  return (
    <>
      <div className="p-8 border rounded-xl shadow-md mt-7">
        <h2 className="mt-2 font-bold text-xl">{carDetail?.userName}</h2>
        <h2 className="mt-2 text-gray-500 text-xl">{carDetail?.createdBy}</h2>
        <Button className="flex items-center gap-2 w-full mt-5 rounded-lg">
          <IoSend />
          Message Seller
        </Button>
      </div>
    </>
  );
}

export default OwnerDetail;
