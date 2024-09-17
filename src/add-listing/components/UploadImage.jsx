import React from "react";

function UploadImage() {
  return (
    <>
      <div>
        <h2 className="text-xl my-4 font-bold text-slate-700">
          Upload Car Images
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1">
          <label htmlFor="upload-images">
            <div className="border rounded-xl border-dotted border-primary bg-green-100 p-10 cursor-pointer hover:shadow-md">
              <h2 className="text-2xl text-center text-primary">+</h2>
            </div>
          </label>
          <input
            type="file"
            multiple={true}
            id="upload-images"
            className="opacity-0"
          />
        </div>
      </div>
    </>
  );
}

export default UploadImage;
