import IconField from "@/add-listing/components/IconField";
import carSpecification from "@/Shared/carSpecification";
import React from "react";

function Specification({ carDetail }) {
  return (
    <>
      <div className="p-8 rounded-xl border shadow-md mt-7">
        {carSpecification.map((item, index) => (
          <div className="mt-5">
            <h2 className="flex gap-2">
              <IconField icon={item.icon} />
              {item.name}
            </h2>
          </div>
        ))}
        {/* {carDetail?.length > 0 &&
          carDetail.map((carItem, index) => (
            <div>
              <IconField icon={carSpecification[index]?.icon} />
            </div>
          ))}
            */}
      </div>
    </>
  );
}

export default Specification;
