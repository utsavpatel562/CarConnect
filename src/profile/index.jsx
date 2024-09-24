import Header from "@/components/Header";
import React from "react";
import MyListing from "./components/MyListing";
import { TbListDetails } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdAllInbox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

function Profile() {
  return (
    <>
      <div>
        <Header />
        <div className="px-24 md:px-24 my-10 mb-20">
          <Tabs defaultValue="my-listing" className="w-full">
            <TabsList className="w-full flex justify-start">
              <TabsTrigger
                value="my-listing"
                className="flex items-center gap-2"
              >
                <TbListDetails />
                <span>My Listing</span>
              </TabsTrigger>
              <TabsTrigger value="inbox" className="flex items-center gap-2">
                <MdAllInbox />
                Inbox
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <CgProfile />
                Profile
              </TabsTrigger>
            </TabsList>
            <TabsContent value="my-listing" className="my-5">
              <MyListing />
            </TabsContent>
            <TabsContent value="inbox">inbox</TabsContent>
            <TabsContent value="profile">profile</TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Profile;
