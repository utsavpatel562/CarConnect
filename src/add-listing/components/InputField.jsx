import { Input } from "@/components/ui/input";
import React from "react";

function InputField({ item, handleInputChange, carInfo }) {
  return (
    <>
      <div>
        <Input
          autoComplete="off"
          className="mt-2"
          type={item?.fieldType}
          name={item?.name}
          required={item?.required}
          defaultValue={carInfo?.[item.name]}
          onChange={(e) => handleInputChange(item.name, e.target.value)}
        />
      </div>
    </>
  );
}

export default InputField;
