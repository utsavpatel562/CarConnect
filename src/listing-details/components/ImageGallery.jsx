import React from "react";

function ImageGallery({ carDetail }) {
  return (
    <>
      <div>
        <img
          src={carDetail?.images[0].imageUrl}
          alt="Car"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-xl object-cover"
        />
      </div>
    </>
  );
}

export default ImageGallery;
