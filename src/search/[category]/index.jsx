import Header from "@/components/Header";
import Search from "@/components/Search";
import React from "react";

function SearchByCategory() {
  return (
    <>
      <div>
        <Header />
        <div
          className="p-10 flex justify-center"
          style={{
            background:
              "radial-gradient(circle, #e1e5e9, #dee4ed, #dde3f1, #dde1f5, #e0dff8)",
          }}
        >
          <Search />
        </div>
      </div>
    </>
  );
}

export default SearchByCategory;
