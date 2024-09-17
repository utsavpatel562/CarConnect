import React from "react";

function UploadImage() {
  return (
    <>
      <div>
        <div>
          <label htmlFor="upload-images">
            <div className="border rounded-xl border-dotted border-primary bg-green-100 p-4">
              <h2 className="text-lg">+</h2>
            </div>
          </label>
          <input
            type="file"
            multiple={true}
            id="upload-images"
            className="opacity"
          />
        </div>
      </div>
    </>
  );
}

export default UploadImage;
