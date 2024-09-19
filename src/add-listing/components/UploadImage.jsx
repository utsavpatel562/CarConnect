import { Button } from "@/components/ui/button";
import { storage } from "../../../configs/firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

function UploadImage() {
  const [selectedFileList, setSelectedFileList] = useState([]);
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

  const UploadImages = () => {
    selectedFileList.forEach((file) => {
      const fileName = Date.now() + ".png";
      const storageRef = ref(storage, "car-marketplace/" + fileName);
      const metaData = {
        contentType: "image/png",
      };
      uploadBytes(storageRef, file, metaData)
        .then((snapShot) => {
          console.log("Upload File");
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          // Handle the error here (e.g., display an error message to the user)
        });
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
            {selectedFileList.map((image, index) => (
              <div key={index}>
                <FaRegTrashCan
                  className="cursor-pointer absolute m-2 text-lg h-6 w-6 text-white bg-slate-800 rounded-full p-1"
                  onClick={() => onImageRemove(image, index)}
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
        <Button onClick={UploadImages}>Upload Image</Button>
      </div>
    </>
  );
}

export default UploadImage;
