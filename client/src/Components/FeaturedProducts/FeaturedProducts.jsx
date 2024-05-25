import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../../data";

function FeaturedProducts() {

  //Active Button State
  const [activeButton, setActiveButton] = useState("all");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <h1 className="mt-20 mb-4 px-24 text-3xl font-bold text-gray-700">
        Featured Collection
      </h1>
      {/* <div className="flex justify-center">
        <div className="inline-flex rounded-md shadow-sm my-4" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l ${activeButton === "jacket"
              ? "z-10 bg-gray-600 text-orange-400 ring-2 ring-orange-400"
              : "bg-gray-700 border-gray-600 border-2 text-white"
              }`}
            name="jacket"
            onClick={() => handleButtonClick("jacket")}
          >
            JACKETS
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${activeButton === "watch"
              ? "z-10 bg-gray-600 text-orange-400 ring-2 ring-orange-400"
              : "bg-gray-700 border-gray-600 border-2 text-white"
              }`}
            name="watch"
            onClick={() => handleButtonClick("watch")}
          >
            WATCH
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${activeButton === "suit"
              ? "z-10 bg-gray-600 text-orange-400 ring-2 ring-orange-400"
              : "bg-gray-700 border-gray-600 border-2 text-white"
              }`}
            name="suit"
            onClick={() => handleButtonClick("suit")}
          >
            SUITS
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${activeButton === "shirt"
              ? "z-10 bg-gray-600 text-orange-400 ring-2 ring-orange-400"
              : "bg-gray-700 border-gray-600 border-2 text-white"
              }`}
            name="shirt"
            onClick={() => handleButtonClick("shirt")}
          >
            SHIRTS
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${activeButton === "t-shirt"
              ? "z-10 bg-gray-600 text-orange-400 ring-2 ring-orange-400"
              : "bg-gray-700 border-gray-600 border-2 text-white"
              }`}
            name="t-shirt"
            onClick={() => handleButtonClick("t-shirt")}
          >
            T-SHIRTS & POLOS
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${activeButton === "hoodie"
              ? "z-10 bg-gray-600 text-orange-400 ring-2 ring-orange-400"
              : "bg-gray-700 border-gray-600 border-2 text-white"
              }`}
            name="hoodie"
            onClick={() => handleButtonClick("hoodie")}
          >
            HOODIE
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r ${activeButton === "jeans"
              ? "z-10 bg-gray-600 text-orange-400 ring-2 ring-orange-400"
              : "bg-gray-700 border-gray-600 border-2 text-white"
              }`}
            name="jeans"
            onClick={() => handleButtonClick("jeans")}
          >
            JEANS
          </button>
        </div>
      </div> */}
      <ProductCard cardInfo={products.slice(0, 4)} activeButton={activeButton} />
    </>
  );
}

export default FeaturedProducts;
