"use client";
import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

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
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>Aceternity UI</span>
            </HoverBorderGradient>
          </div>
        ) : (
          <div>Submit Listing</div>
        )}
      </div>
    </>
  );
}

export default Header;
