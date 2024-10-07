import { Button } from "@/components/ui/button";
import Services from "@/Shared/Services";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { IoSend } from "react-icons/io5";
import { useNavigate } from "react-router";

function OwnerDetail({ carDetail }) {
  const { user } = useUser();
  const navigation = useNavigate();
  const OnMessageOwnerButtonClick = async () => {
    // user and owner id capture here
    const userId = user?.primaryEmailAddress.emailAddress.split("@")[0];
    const ownerUserId = carDetail?.createdBy.split("@")[0];
    // To create current UserID
    try {
      await Services.CreateSendBirdUser(
        userId,
        user?.fullName,
        user?.imageUrl
      ).then((resp) => {
        console.log(resp);
      });
    } catch (e) {}
    // seller UserID
    try {
      console.log(ownerUserId);
      await Services.CreateSendBirdUser(
        ownerUserId,
        carDetail?.userName,
        carDetail?.userImageUrl
      ).then((resp) => {
        console.log(resp);
      });
    } catch (e) {}
    // Create Channel
    try {
      await Services.CreateSendBirdChannel(
        [userId, ownerUserId],
        carDetail?.listingTitle
      ).then((resp) => {
        console.log(resp);
        console.log("channel created");
        navigation("/profile");
      });
    } catch (e) {}
  };
  return (
    <>
      <div
        className="p-6 md:p-8 border rounded-xl shadow-md mt-5 md:mt-7 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl"
        id="gotomsg"
      >
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
