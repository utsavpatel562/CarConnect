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
        <div className="px-10 md:px-20 my-10 mb-20">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger
                value="my-listing"
                className="flex items-center gap-2"
              >
                <TbListDetails />
                <span>My Listing</span>
              </TabsTrigger>
              <TabsTrigger value="inbox">
                <MdAllInbox />
                Inbox
              </TabsTrigger>
              <TabsTrigger value="profile">
                <CgProfile />
                Profile
              </TabsTrigger>
            </TabsList>
            <TabsContent value="my-listing">For my listing.</TabsContent>
            <TabsContent value="inbox">inbox</TabsContent>
            <TabsContent value="profile">profile</TabsContent>
          </Tabs>

          <MyListing />
        </div>
      </div>
    </>
  );
}

export default Profile;
