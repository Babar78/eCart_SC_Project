import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ProductCard from "../../Components/ProductCard/ProductCard";

import products from "../../../data";

function Products() {
  const cardInfo = [
    {
      id: 1,
      image:
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      description: "Black Leather Jacket",
      style: "Minimal Design",
      size: "Small",
      color: "Black",
      price: "65",
      category: "jacket",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2765557/pexels-photo-2765557.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Blue Denim Jacket",
      style: "Modern Design",
      size: "Medium",
      color: "Blue",
      price: "75",
      category: "jacket",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Sky Blue Denim Jacket",
      style: "Classic Design",
      size: "Large",
      color: "Black",
      price: "85",
      category: "jacket",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/14389775/pexels-photo-14389775.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Black hoodie for men",
      style: "Modern Design",
      size: "Extra Large",
      color: "Black",
      price: "95",
      category: "jacket",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/9561299/pexels-photo-9561299.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Quantum Enigma",
      style: "Classic Design",
      size: "Small",
      color: "Black",
      price: "95",
      category: "watch",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "NovaGlo Masterpiece",
      style: "Classic Design",
      size: "Medium",
      color: "Black",
      price: "72",
      category: "watch",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/11638635/pexels-photo-11638635.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Eclipse Horizon",
      style: "Classic Design",
      size: "Medium",
      color: "Black",
      price: "50",
      category: "watch",
    },
    {
      id: 8,
      image:
        "https://images.pexels.com/photos/13548995/pexels-photo-13548995.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Vanguard ChronoTech",
      style: "Classic Design",
      size: "Large",
      color: "Brown",
      price: "45",
      category: "watch",
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/3613388/pexels-photo-3613388.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Regal Elegance",
      style: "Slim Fit",
      size: "Large",
      color: "Black",
      price: "145",
      category: "suit",
    },
    {
      id: 10,
      image:
        "https://images.pexels.com/photos/4566871/pexels-photo-4566871.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Feminine Grace",
      style: "Slim Fit",
      size: "Large",
      color: "Pink",
      price: "120",
      category: "suit",
    },
    {
      id: 11,
      image:
        "https://images.pexels.com/photos/7083673/pexels-photo-7083673.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern Maverick",
      style: "Classic Fit",
      size: "Large",
      color: "Gray",
      price: "160",
      category: "suit",
    },
    {
      id: 12,
      image:
        "https://images.pexels.com/photos/5411335/pexels-photo-5411335.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Midnight Royale",
      style: "Classic Design",
      size: "Large",
      color: "White",
      price: "110",
      category: "suit",
    },
    {
      id: 13,
      image:
        "https://images.pexels.com/photos/1147377/pexels-photo-1147377.png?auto=compress&cs=tinysrgb&w=600",
      description: "Black Checkered Shirt",
      style: "Casual",
      size: "Large",
      color: "Black",
      price: "20",
      category: "shirt",
    },
    {
      id: 14,
      image:
        "https://img.freepik.com/free-photo/young-man-with-bengal-fire-sticks-hands_23-2147989971.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=ais",
      description: "Red Dotted Shirt",
      style: "Casual",
      size: "X-Large",
      color: "Red",
      price: "10",
      category: "shirt",
    },
    {
      id: 15,
      image:
        "https://img.freepik.com/free-photo/elegant-young-handsome-man-studio-fashion-portrait_1301-3973.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=ais",
      description: "Red Lining Shirt",
      style: "Casual",
      size: "X-Large",
      color: "Red",
      price: "12",
      category: "shirt",
    },
    {
      id: 16,
      image:
        "https://images.pexels.com/photos/14709323/pexels-photo-14709323.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Black Hvaein Shirt",
      style: "Casual",
      size: "X-Large",
      color: "Black",
      price: "12",
      category: "shirt",
    },
    {
      id: 17,
      image:
        "https://img.freepik.com/free-photo/yellow-t-shirt-with-mountain-middle-picture-forest-bottom_1340-37687.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=sph",
      description: "Yellow Print Shirt",
      style: "Casual Wear",
      size: "X-Large",
      color: "Yellow",
      price: "5",
      category: "t-shirt",
    },
    {
      id: 18,
      image:
        "https://img.freepik.com/free-photo/man-black-shirt-with-word-unnana-it_1340-25483.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=ais",
      description: "Black T-Shirt",
      style: "Gym Wear",
      size: "X-Large",
      color: "Black",
      price: "5",
      category: "t-shirt",
    },
    {
      id: 19,
      image:
        "https://images.pexels.com/photos/4255642/pexels-photo-4255642.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Red T-Shirt",
      style: "Street Wear",
      size: "Small",
      color: "Red",
      price: "8",
      category: "t-shirt",
    },
    {
      id: 20,
      image:
        "https://images.pexels.com/photos/5996936/pexels-photo-5996936.png?auto=compress&cs=tinysrgb&w=600",
      description: "Beautiful Purple T-Shirt",
      style: "Street Wear",
      size: "Large",
      color: "Purple",
      price: "8",
      category: "t-shirt",
    },
    {
      id: 21,
      image:
        "https://img.freepik.com/free-photo/bff-printed-red-hoodie_53876-105408.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=sph",
      description: "Simle Red Hoodie",
      style: "Pullover Hoodie",
      size: "Large",
      color: "Red",
      price: "18",
      category: "hoodie",
    },
    {
      id: 22,
      image:
        "https://img.freepik.com/free-photo/man-yellow-hoodie-streetwear-men-s-apparel-fashion_53876-105536.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=sph",
      description: "Yellow Men Hoodie",
      style: "Pullover Hoodie",
      size: "Small",
      color: "Yellow",
      price: "15",
      category: "hoodie",
    },
    {
      id: 23,
      image:
        "https://img.freepik.com/free-photo/white-hoodie-man-with-green-pants-city_53876-119827.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=sph",
      description: "White Men Hoodie",
      style: "Pullover Hoodie",
      size: "Small",
      color: "Yellow",
      price: "15",
      category: "hoodie",
    },
    {
      id: 24,
      image:
        "https://img.freepik.com/free-photo/jeans_1203-8093.jpg?size=626&ext=jpg&uid=R71230743&ga=GA1.1.1099901351.1675777811&semt=sph",
      description: "Blue Jeans Men",
      style: "Straight Leg",
      size: "Large",
      color: "Blue",
      price: "25",
      category: "jeans",
    },
    {
      id: 25,
      image:
        "https://images.pexels.com/photos/6062228/pexels-photo-6062228.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Black Ripped Jeans",
      style: "Slim Fit",
      size: "Large",
      color: "Black",
      price: "25",
      category: "jeans",
    },
    {
      id: 26,
      image:
        "https://images.pexels.com/photos/5996936/pexels-photo-5996936.png?auto=compress&cs=tinysrgb&w=600",
      description: "Blue Jeans for Women",
      style: "Oversized",
      size: "Large",
      color: "Blue",
      price: "17",
      category: "jeans",
    },
    {
      id: 27,
      image:
        "https://images.pexels.com/photos/7045178/pexels-photo-7045178.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Dark blue jean",
      style: "Slim Fit",
      size: "Large",
      color: "Blue",
      price: "17",
      category: "jeans",
    },
  ];

  //Active Button State
  const [activeButton, setActiveButton] = useState("all");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <Navbar />
      <div className="mt-48 flex divide-x-2">
        <div className="flex-1  text-center mx-20">
          <h1 className="text-3xl font-bold text-[#1F2937]">Product Filter</h1>
          <div className="flex justify-center flex-col mt-4">
            <button
              className={`my-2 py-2 text-sm font-medium rounded ${activeButton === "all"
                ? "z-10 bg-gray-600 text-white ring-2 ring-orange-400"
                : "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 border border-gray-400 shadow"
                }`}
              onClick={() => handleButtonClick("all")}
            >
              All
            </button>
            <button
              className={`my-2 py-2 text-sm font-medium rounded ${activeButton === "jacket"
                ? "z-10 bg-gray-600 text-white ring-2 ring-orange-400"
                : "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 border border-gray-400 shadow"
                }`}
              onClick={() => handleButtonClick("jacket")}
            >
              Jackets
            </button>
            <button
              className={`my-2 py-2 text-sm font-medium rounded ${activeButton === "shirt"
                ? "z-10 bg-gray-600 text-white ring-2 ring-orange-400"
                : "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 border border-gray-400 shadow"
                }`}
              onClick={() => handleButtonClick("shirt")}
            >
              Casual Shirts
            </button>
            <button
              className={`my-2 py-2 text-sm font-medium rounded ${activeButton === "t-shirt"
                ? "z-10 bg-gray-600 text-white ring-2 ring-orange-400"
                : "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 border border-gray-400 shadow"
                }`}
              onClick={() => handleButtonClick("t-shirt")}
            >
              T-Shirt/Polo
            </button>
            <button
              className={`my-2 py-2 text-sm font-medium rounded ${activeButton === "hoodie"
                ? "z-10 bg-gray-600 text-white ring-2 ring-orange-400"
                : "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 border border-gray-400 shadow"
                }`}
              onClick={() => handleButtonClick("hoodie")}
            >
              Hoodie
            </button>
            <button
              className={`my-2 py-2 text-sm font-medium rounded ${activeButton === "suit"
                ? "z-10 bg-gray-600 text-white ring-2 ring-orange-400"
                : "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 border border-gray-400 shadow"
                }`}
              onClick={() => handleButtonClick("suit")}
            >
              Suits
            </button>
            <button
              className={`my-2 py-2 text-sm font-medium rounded ${activeButton === "watch"
                ? "z-10 bg-gray-600 text-white ring-2 ring-orange-400"
                : "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 border border-gray-400 shadow"
                }`}
              onClick={() => handleButtonClick("watch")}
            >
              Watch
            </button>
          </div>
        </div>

        <ProductCard cardInfo={products} activeButton={activeButton} />
      </div>
      <Footer />
    </>
  );
}

export default Products;
