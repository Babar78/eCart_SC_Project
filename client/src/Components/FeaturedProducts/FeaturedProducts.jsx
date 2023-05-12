import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function FeaturedProducts() {
  //Cards Details
  const cardInfo = [
    {
      image: "https://cf.shopee.co.id/file/09b084ea979115a9b84ab6a1a1425f5f",
      title: "GUCCI JACKET 1",
      price: "$65",
    },
    {
      image:
        "https://s.alicdn.com/@sc04/kf/U75e68f0a961d499ea8a4868fa717ede6P.jpg_300x300.jpg    ",
      title: "GUCCI JACKET 2",
      price: "$75",
    },
    {
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/61lCaTXvyfL._AC_UL330_SR330,330_.jpg",
      title: "GUCCI JACKET 3",
      price: "$85",
    },
    {
      image:
        "https://ae01.alicdn.com/kf/Hbe69d516859a417ba044ef67aa88b8b49.jpg?width=790&height=905&hash=1695",
      title: "GUCCI JACKET 4",
      price: "$95",
    },
  ];

  return (
    <>
    <h1 className="mt-20 mb-4 px-24 text-3xl font-bold text-gray-700">Featured Collection</h1>
      <div className="flex justify-center">
        <div className="inline-flex rounded-md shadow-sm my-4" role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange-400 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-600 dark:focus:ring-orange-400 dark:focus:text-orange-400"
          >
            JACKETS
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange-400 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-600 dark:focus:ring-orange-400 dark:focus:text-orange-400"
          >
            VESTS
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange-400 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-600 dark:focus:ring-orange-400 dark:focus:text-orange-400"
          >
            SUITS
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange-400 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-600 dark:focus:ring-orange-400 dark:focus:text-orange-400"
          >
            SHIRTS
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange-400 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-600 dark:focus:ring-orange-400 dark:focus:text-orange-400"
          >
            T-SHIRTS & POLOS
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange-400 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-600 dark:focus:ring-orange-400 dark:focus:text-orange-400"
          >
            OVERCOAT
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-orange-400 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-orange-400 dark:hover:bg-gray-600 dark:focus:ring-orange-400 dark:focus:text-orange-400"
          >
            JEANS
          </button>
        </div>
      </div>
      <ProductCard cardInfo={cardInfo} />
    </>
  );
}

export default FeaturedProducts;
