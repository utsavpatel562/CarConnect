import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./ui/separator";
import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <>
      <div className="p-2 bg-white md:p-5 rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]">
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
        <Separator orientation="vertical" />
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
        <BsSearch className="text-xl" />
      </div>
    </>
  );
}

export default Search;
