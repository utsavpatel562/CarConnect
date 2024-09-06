import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React from "react";

function Profile() {
  return (
    <>
      <div>
        <Header />
        <div>
          <div>
            <h2 className="font-bold text-4xl">My Listing</h2>
            <Button>+ Add New Listing</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
