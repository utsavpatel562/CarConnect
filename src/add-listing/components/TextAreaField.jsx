import { Textarea } from "@/components/ui/textarea";
import React from "react";

function TextAreaField({ item, handleInputChange }) {
  return (
    <>
      <div>
        <Textarea
          className="mt-2"
          onChange={(e) => handleInputChange(item.name, e.target.value)}
        />
      </div>
    </>
  );
}

export default TextAreaField;
