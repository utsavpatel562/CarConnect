"use client";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
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
        <Link to={"/"}>
          <img
            src="/logo4.png"
            alt="Logo"
            width={150}
            height={100}
            className="cursor-pointer"
          />
        </Link>
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
          <a href="/#searchbytype">
            <li className="flex gap-2 items-center font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
              <CiSearch />
              Search
            </li>
          </a>
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
            <span>
              <SignInButton className="bg-slate-800 text-white w-24 h-9 rounded-md shadow-xl" />{" "}
              {/* Changes for second button */}
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
