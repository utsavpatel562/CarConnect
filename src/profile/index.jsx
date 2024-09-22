import Header from "@/components/Header";
import React from "react";
import MyListing from "./components/MyListing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Profile() {
  return (
    <>
      <div>
        <Header />
        <div className="px-10 md:px-20 my-10">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>

          <MyListing />
        </div>
      </div>
    </>
  );
}

export default Profile;
