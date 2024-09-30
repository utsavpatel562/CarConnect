"use client";
import { db } from "./../../../configs";
import { storage } from "../../../configs/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { CarImages } from "../../../configs/schema";
import { eq } from "drizzle-orm";

function UploadImage({ triggerUploadImages, setLoader, carInfo, mode }) {
  const [selectedFileList, setSelectedFileList] = useState([]);
  const [EditCarImageList, setEditCarImageList] = useState([]);

  useEffect(() => {
    if (mode == "edit") {
      setEditCarImageList([]);
      carInfo?.images.forEach((image) => {
        setEditCarImageList((prev) => [...prev, image?.imageUrl]);
      });
    }
  }, [carInfo]);

  useEffect(() => {
    if (triggerUploadImages) {
      UploadImageToServer();
    }
  }, [triggerUploadImages]);

  const onFileSelected = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setSelectedFileList((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image, index) => {
    const result = selectedFileList.filter((item) => item != image);
    setSelectedFileList(result);
  };

  const onImageRemoveFromDB = async (image, index) => {
    const result = await db
      .delete(CarImages)
      .where(eq(CarImages.id, carInfo?.images[index]?.id))
      .returning({ id: CarImages.id });
    const imageList = EditCarImageList.filter((item) => item != image);
    setEditCarImageList(imageList);
  };

  const UploadImageToServer = async () => {
    setLoader(true);
    await selectedFileList.forEach((file) => {
      const fileName = Date.now() + ".png";
      const storageRef = ref(storage, "car-marketplace/" + fileName);
      const metaData = {
        contentType: "image/png",
      };
      uploadBytes(storageRef, file, metaData)
        .then((_snapShot) => {
          console.log("Upload File");
        })
        .then((resp) => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            console.log(downloadUrl);
            await db.insert(CarImages).values({
              imageUrl: downloadUrl,
              carListingId: triggerUploadImages,
            });
          });
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          // Handle the error here (e.g., display an error message to the user)
        });
      setLoader(false);
    });
  };

  return (
    <>
      <div>
        <h2 className="text-xl my-4 font-bold text-slate-700">
          Upload Car Images
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1">
          <div className="flex flex-wrap justify-start gap-5 my-6">
            {mode == "edit" &&
              EditCarImageList.map((image, index) => (
                <div key={index}>
                  <FaRegTrashCan
                    className="cursor-pointer absolute m-2 text-lg h-6 w-6 text-white bg-slate-800 rounded-full p-1"
                    onClick={() => onImageRemoveFromDB(image, index)}
                  />
                  <img
                    src={image}
                    className="w-[200px] h-[200px] object-cover rounded-xl"
                  />
                </div>
              ))}
            {selectedFileList.map((image, index) => (
              <div key={index}>
                <FaRegTrashCan
                  className="cursor-pointer absolute m-2 text-lg h-6 w-6 text-white bg-slate-800 rounded-full p-1"
                  onClick={() => onImageRemoveFromDB(image, index)}
                />
                <img
                  src={URL.createObjectURL(image)}
                  className="w-[200px] h-[200px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
          <label htmlFor="upload-images">
            <div className="border rounded-xl border-dotted border-primary bg-green-100 p-10 cursor-pointer hover:shadow-md">
              <h2 className="text-2xl text-center text-primary">+</h2>
            </div>
          </label>
          <input
            type="file"
            multiple={true}
            onChange={onFileSelected}
            id="upload-images"
            className="opacity-0"
          />
        </div>
      </div>
    </>
  );
}

export default UploadImage;
