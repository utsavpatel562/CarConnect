import Header from "@/components/Header";
import React from "react";
import MyListing from "./components/MyListing";
import { TbListDetails } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdAllInbox } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Inbox from "./components/Inbox";
import Footer from "@/components/Footer";
import MyProfile from "./components/MyProfile";

function Profile() {
  return (
    <>
      <div>
        <Header />
        <div className="px-5 md:px-24 my-10 mb-20">
          <Tabs defaultValue="my-listing" className="w-full">
            <TabsList className="w-full flex justify-start flex-wrap gap-4">
              <TabsTrigger
                value="my-listing"
                className="flex items-center gap-2 text-sm sm:text-base"
              >
                <TbListDetails className="h-5 w-5" />
                <span>My Listing</span>
              </TabsTrigger>
              <TabsTrigger
                value="inbox"
                className="flex items-center gap-2 text-sm sm:text-base"
              >
                <MdAllInbox className="h-5 w-5" />
                <span>Inbox</span>
              </TabsTrigger>
              <TabsTrigger
                value="profile"
                className="flex items-center gap-2 text-sm sm:text-base"
              >
                <CgProfile className="h-5 w-5" />
                <span>Profile</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="my-listing" className="my-5">
              <MyListing />
            </TabsContent>
            <TabsContent value="inbox">
              <Inbox />
            </TabsContent>
            <TabsContent value="profile">
              <MyProfile />
            </TabsContent>
          </Tabs>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Profile;
