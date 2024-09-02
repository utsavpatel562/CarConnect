import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./ui/separator";
import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <>
      <div className="p-2 bg-white md:p-5 rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]">
        <Select>
          <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Cars" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">New</SelectItem>
            <SelectItem value="dark">Old</SelectItem>
          </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block" />
        <Select>
          <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block" />
        <Select>
          <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <div>
          <CiSearch className="text-[50px] text-white bg-primary rounded-full p-4 cursor-pointer hover:scale-105 transition-all" />
        </div>
      </div>
    </>
  );
}

export default Search;
