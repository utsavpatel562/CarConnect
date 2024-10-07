import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./ui/separator";
import { CiSearch } from "react-icons/ci";
import Data from "@/Shared/Data";
import { Link } from "react-router-dom";

function Search() {
  const [cars, setCars] = useState();
  const [make, setMake] = useState();
  const [price, setPrice] = useState();

  return (
    <>
      <div
        className="p-3 bg-slate-800 text-slate-200 lg:rounded-full md:rounded-full sm:rounded-lg flex flex-col gap-5 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto md:flex-row md:items-center"
        id="newSearch"
      >
        <Select onValueChange={(value) => setCars(value)}>
          <SelectTrigger className="outline-none border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Cars" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="New">New</SelectItem>
            <SelectItem value="Old">Old</SelectItem>
            <SelectItem value="Certified Pre-Owned">
              Certified Pre-Owned
            </SelectItem>
          </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block" />
        <Select onValueChange={(value) => setMake(value)}>
          <SelectTrigger className="outline-none border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Car Makes" />
          </SelectTrigger>
          <SelectContent>
            {Data.CarMakes.map((maker, index) => (
              <SelectItem key={index} value={maker.name}>
                {maker.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block" />
        <Select onValueChange={(value) => setPrice(value)}>
          <SelectTrigger className="outline-none border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Pricing" />
          </SelectTrigger>
          <SelectContent>
            {Data.Pricing.map((price, index) => (
              <SelectItem key={index} value={price.amount}>
                {price.amount}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Link
          to={"/search?cars=" + cars + "&make=" + make + "&price=" + price}
          className="flex justify-center"
        >
          <CiSearch className="text-[40px] text-white bg-primary rounded-full p-3 cursor-pointer hover:scale-105 transition-all md:text-[50px] md:p-4" />
        </Link>
      </div>
    </>
  );
}

export default Search;
