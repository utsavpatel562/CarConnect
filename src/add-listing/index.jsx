{
  /* Very important file for inserting data to database and also used to
  to update the existing value in database.*/
}

("use client");
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import carDetails from "./../Shared/carDetails.json";
import InputField from "./components/InputField";
import DropdownField from "./components/DropdownField";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import features from "./../Shared/features.json";
import { Button } from "@/components/ui/button";
import TextAreaField from "./components/TextAreaField";
import { db } from "./../../configs";
import { CarImages, CarListing } from "./../../configs/schema";
import IconField from "./components/IconField";
import UploadImage from "./components/UploadImage";
import { RiLoader2Fill } from "react-icons/ri";
import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import moment from "moment";
import { useSearchParams } from "react-router-dom";
import { eq } from "drizzle-orm";
import Services from "@/Shared/Services";

function AddListing() {
  const [formData, setFormData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);

  const [searchParams] = useSearchParams();

  const [triggerUploadImages, setTriggerUploadImages] = useState();
  const [loader, setLoader] = useState(false);
  const [carInfo, setCarInfo] = useState();
  const navigate = useNavigate();
  const { user } = useUser();

  const mode = searchParams.get("mode");
  const recordId = searchParams.get("id");

  useEffect(() => {
    if (mode == "edit") {
      GetListingDetail();
    }
  }, []);

  const GetListingDetail = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
      .where(eq(CarListing.id, recordId));
    const resp = Services.FormResult(result);
    setCarInfo(resp[0]);
    setFormData(resp[0]);
    setFeaturesData(resp[0].features);
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleFeaturesChange = (name, value) => {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(featuresData);
  };

  const onSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    console.log(formData);

    if (mode == "edit") {
      const result = await db
        .update(CarListing)
        .set({
          ...formData,
          features: featuresData,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          userName: user?.fullName,
          userImageUrl: user?.imageUrl,
          postedOn: moment().format("DD/MM/yyyy"),
        })
        .where(eq(CarListing.id, recordId))
        .returning({ id: CarListing.id });
      console.log(result);
      navigate("/profile");
      setLoader(false);
    } else {
      try {
        const result = await db
          .insert(CarListing)
          .values({
            ...formData,
            features: featuresData,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName,
            userImageUrl: user?.imageUrl,
            postedOn: moment().format("DD/MM/yyyy"),
          })
          .returning({ id: CarListing.id });
        if (result) {
          console.log("Data Saved");
          setTriggerUploadImages(result[0]?.id);
          setLoader(false);
        }
      } catch (e) {
        console.log("Error", e);
      }
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className="px-6 md:px-16 my-10">
          <h2 className="font-bold text-4xl text-gray-800">Add New Listing</h2>
          <form className="p-8 border border-gray-200 shadow-lg rounded-2xl mt-10 bg-white">
            <div>
              <h2 className="font-semibold text-2xl mb-4 text-gray-700">
                Car Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {carDetails.carDetails.map((item, index) => (
                  <div key={index}>
                    <label className="text-sm font-medium text-gray-600 flex gap-2 items-center">
                      <IconField icon={item?.icon} />
                      {item?.label}{" "}
                      {item.required && <span className="text-red-500">*</span>}
                    </label>
                    {item.fieldType == "text" || item.fieldType == "number" ? (
                      <InputField
                        carInfo={carInfo}
                        item={item}
                        handleInputChange={handleInputChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                    ) : item.fieldType == "dropdown" ? (
                      <DropdownField
                        carInfo={carInfo}
                        handleInputChange={handleInputChange}
                        item={item}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                    ) : item.fieldType == "textarea" ? (
                      <TextAreaField
                        carInfo={carInfo}
                        item={item}
                        handleInputChange={handleInputChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <Separator className="my-8" />
            <div>
              <h2 className="font-semibold text-2xl text-gray-700">Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {features.features.map((item, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <Checkbox
                      onCheckedChange={(value) =>
                        handleFeaturesChange(item.name, value)
                      }
                      className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
                      checked={featuresData?.[item.name]}
                    />
                    <span className="text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-6" />
              <UploadImage
                carInfo={carInfo}
                mode={mode}
                triggerUploadImages={triggerUploadImages}
                setLoader={(v) => {
                  setLoader(v);
                  navigate("/profile");
                }}
              />
              <div className="flex justify-end mt-8">
                <Button
                  type="submit"
                  onClick={(e) => onSubmit(e)}
                  className="px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-200"
                >
                  {!loader ? (
                    "Submit"
                  ) : (
                    <RiLoader2Fill className="animate-spin text-lg" />
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddListing;
