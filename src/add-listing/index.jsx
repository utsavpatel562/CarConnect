import Header from "@/components/Header";
import React from "react";
import carDetails from "./../Shared/carDetails.json";
import InputField from "./components/InputField";

function AddListing() {
  return (
    <>
      <div>
        <Header />
        <div className="px-10 md:px-20 my-10">
          <h2 className="font-bold text-4xl">Add New Listing</h2>
          <form className="p-10 border-2 rounded-xl mt-10">
            <div>
              <h2 className="font-medium text-xl mb-6"> Car Details</h2>
              <div>
                {carDetails.carDetails.map((item, index) => (
                  <div key={index}>
                    <label>{item?.label}</label>
                    {item.fieldType == "text" || item.fieldType == "number" ? (
                      <InputField />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddListing;
