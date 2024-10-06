import { Button } from "@/components/ui/button";
import Services from "@/Shared/Services";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { IoSend } from "react-icons/io5";

function OwnerDetail({ carDetail }) {
  const { user } = useUser();
  const OnMessageOwnerButtonClick = async () => {
    // To create current UserID
    try {
      const userId = user?.primaryEmailAddress.emailAddress.split("@")[0];
      await Services.CreateSendBirdUser(
        userId,
        user?.fullName,
        user?.imageUrl
      ).then((resp) => {
        console.log(resp);
      });
    } catch (e) {}
    // seller UserID

    // Create Channel
  };
  return (
    <>
      <div className="p-6 md:p-8 border rounded-xl shadow-md mt-5 md:mt-7 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="font-medium text-xl md:text-2xl mb-2 md:mb-3">
          Owner Details
        </h2>
        <h2 className="mt-2 font-semibold text-lg md:text-xl text-gray-500">
          Seller: {carDetail?.userName}
        </h2>
        <h2 className="mt-2 text-gray-500 text-lg md:text-xl">
          Email: {carDetail?.createdBy}
        </h2>
        <Button
          className="flex items-center justify-center gap-2 w-full mt-4 md:mt-5 rounded-lg"
          onClick={OnMessageOwnerButtonClick}
        >
          <IoSend />
          Message Seller
        </Button>
      </div>
    </>
  );
}

export default OwnerDetail;
