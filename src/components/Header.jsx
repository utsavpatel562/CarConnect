import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <>
      <div className="flex justify-between items-center shadow-sm p-5">
        <img src="/logo4.png" alt="Logo" width={150} height={100} />
        <ul className="hidden md:flex gap-16">
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Home
          </li>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Search
          </li>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            New
          </li>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Preowned
          </li>
        </ul>
        {isSignedIn ? (
          <div className="flex items-center gap-5">
            <UserButton />
            <Button>Submit Listing</Button>
          </div>
        ) : (
          <div>Submit Listing</div>
        )}
      </div>
    </>
  );
}

export default Header;
