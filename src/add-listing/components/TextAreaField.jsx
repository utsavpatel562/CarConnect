import { Textarea } from "@/components/ui/textarea";
import React from "react";

function TextAreaField({ item, handleInputChange, carInfo }) {
  return (
    <>
      <div>
        <Textarea
          defaultValue={carInfo?.[item.name]}
          className="mt-2"
          onChange={(e) => handleInputChange(item.name, e.target.value)}
          required={item.required}
        />
      </div>
    </>
  );
}

export default TextAreaField;
