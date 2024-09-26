import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function DropdownField({ item, handleInputChange, carInfo }) {
  return (
    <>
      <div>
        <Select
          onValueChange={(value) => handleInputChange(item.name, value)}
          required={item.required}
          defaultValue={carInfo?.[item.name]}
        >
          <SelectTrigger className="w-full mt-2">
            <SelectValue placeholder={item.label} />
          </SelectTrigger>
          <SelectContent>
            {item?.options?.map((option, index) => (
              <SelectItem value={option}>{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

export default DropdownField;
