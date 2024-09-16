"use client";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Button } from "./ui/button";
import { TiThList } from "react-icons/ti";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { MdOutlineWidgets } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { GoCodeSquare } from "react-icons/go";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <>
      <div
        className="flex justify-between items-center shadow-sm p-5"
        style={{}}
      >
        <img src="/logo4.png" alt="Logo" width={150} height={100} />
        <ul className="hidden md:flex gap-10">
          <Link to={"/"}>
            <li className="flex gap-2 items-center font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
              <HiOutlineHome />
              Home
            </li>
          </Link>
          <Link to={"/newMenu"}>
            <li className="flex gap-2 items-center font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
              <MdOutlineWidgets />
              New
            </li>
          </Link>
          <Link to={"/preowned"}>
            <li className="flex gap-2 items-center font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
              <IoCarSportOutline />
              Preowned
            </li>
          </Link>
          <li className="flex gap-2 items-center font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            <CiSearch />
            Search
          </li>
          <Link to={"/aboutme"}>
            <li className="flex gap-2 items-center font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
              <GoCodeSquare />
              Developer
            </li>
          </Link>
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
