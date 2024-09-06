"use client";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Button } from "./ui/button";
import { TiThList } from "react-icons/ti";
import { Link } from "react-router-dom";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <>
      <div
        className="flex justify-between items-center shadow-sm p-5"
        style={{}}
      >
        <img src="/logo4.png" alt="Logo" width={150} height={100} />
        <ul className="hidden md:flex gap-16">
          <Link to={"/"}>
            <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
              Home
            </li>
          </Link>
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
            <Link to={"/profile"}>
              <Button className="bg-slate-700 hover:bg-slate-800">
                <TiThList className="mr-2 h-4 w-4" />
                Submit Listing
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-5">
            <UserButton />
            <HoverBorderGradient
              containerClassName="rounded-lg"
              as="button"
              className="dark:bg-black bg-black text-slate-200 dark:text-white flex items-center space-x-2"
            >
              <span>
                <SignInButton /> {/* Changes for second button */}
              </span>
            </HoverBorderGradient>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
