import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./ProductDetail.module.css";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import CartItem from "../../Components/CartItem/CartItem";

function ProductDetail() {
  const cardInfo = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/3156217/pexels-photo-3156217.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      color: "Sky Blue",
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

  const { id } = useParams();

  // Retrieve the selected product information based on the ID
  const selectedProduct = cardInfo.find(
    (product) => product.id === parseInt(id)
  );

  //Quantity of Product
  const [quantity, setQuantity] = useState(1);

  //Dispatch to add to cart
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productToAdd = { ...selectedProduct, quantity };
    dispatch(addToCart(productToAdd));
  };

  return (
    <>
      <Navbar />
      <div className="containerMain py-20 px-40">
        <div className="w-full mt-10">
          <div className="flex flex-wrap" style={{ height: "550px" }}>
            <div
              className="lg:block lg:w-1/2 lg:h-full md:w-full md:h-full h-1/2 w-full object-cover"
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
            >
              <div
                className="h-full object-cover"
                style={{
                  backgroundImage: `url("${selectedProduct.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="h-full bg-black opacity-25"></div>
              </div>
            </div>
            <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                  {/* Maison Riviera Plain */}
                  {selectedProduct.description}
                  <span className="text-orange-500">
                    {" "}
                    <br /> Denim Jacket
                  </span>
                </h2>
                <p className="mt-2 text-sm text-gray-500 md:text-base">
                  $ {selectedProduct.price}
                </p>
                {/* <div className="my-4 flex">
                  <a href="#" className="flex-none">
                    <div className="h-6 w-6 bg-sky-900"></div>
                  </a>
                  <a href="#" className="flex-none mx-2">
                    <div className="h-6 w-6 bg-gray-900"></div>
                  </a>
                </div> */}
                {/* <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div> */}
                <div className="flex items-center my-4">
                  <p className="font-bold mr-4">Quantity:</p>
                  <div className="flex bg-gray-200 items-center p-1 sm:p-2">
                    <IconButton
                      size="small"
                      onClick={() =>
                        setQuantity((prevQuantity) =>
                          prevQuantity > 1 ? prevQuantity - 1 : 1
                        )
                      }
                      disabled={quantity === 1}
                    >
                      <RemoveIcon />
                    </IconButton>

                    <div className="flex mx-4">{quantity}</div>
                    <IconButton
                      size="small"
                      onClick={() =>
                        setQuantity((prevQuantity) => prevQuantity + 1)
                      }
                    >
                      <AddIcon />
                    </IconButton>
                  </div>
                </div>

                {/* <div className="flex gap-x-4">
                  <input
                    type="radio"
                    id="xl"
                    name="size"
                    className={`hidden ${styles.checkBox}`}
                  />
                  <label
                    htmlFor="xl"
                    className={`${styles.label}`}
                    style={{ cursor: "pointer" }}
                  >
                    XL
                  </label>
                  <input
                    type="radio"
                    id="l"
                    name="size"
                    className={`hidden ${styles.checkBox}`}
                  />
                  <label
                    htmlFor="l"
                    className={`${styles.label}`}
                    style={{ cursor: "pointer" }}
                  >
                    L
                  </label>
                  <input
                    type="radio"
                    id="s"
                    name="size"
                    className={`hidden ${styles.checkBox}`}
                  />
                  <label
                    htmlFor="s"
                    className={`${styles.label}`}
                    style={{ cursor: "pointer" }}
                  >
                    S
                  </label>
                </div> */}

                <div className="flex justify-center lg:justify-start mt-6">
                  <button
                    className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800 flex justify-center items-center gap-1 hover:text-orange-500"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </span>
                  </button>
                  <button className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400 flex justify-center items-center">
                    Add to Wishlist
                  </button>
                </div>
                <div className="flex mt-8">
                  <a>
                    <img
                      src={selectedProduct.image}
                      alt="img"
                      className="w-3/4"
                    />
                  </a>
                  <a>
                    <img
                      src={selectedProduct.image}
                      alt="img"
                      className="w-3/4"
                    />
                  </a>
                  <a>
                    <img
                      src={selectedProduct.image}
                      alt="img"
                      className="w-3/4"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr
          style={{
            height: "2px",
            borderWidth: "0",
            color: "#1F2937",
            backgroundColor: "#1F2937",
          }}
          className="mt-12 ml-12"
        />
        <div className="text-center my-8">
          <h3 className="uppercase font-bold text-orange-500 text-xl">
            product information
          </h3>
          <h1 className="font-bold text-[#1F2937] text-lg">Details</h1>
          <p>
            Cotton Fabric <br />
            Zip Front Facing <br />
            Slim Fit <br />
            Side Entry Pockets
          </p>
          <br />
          <h1 className="font-bold text-[#1F2937] text-lg">Fabric & Care</h1>
          <p>
            46% Cotton, 1% Elastane, 53% Polyester <br />
            Do not iron <br />
            Machine Wash at max 40°C gentle <br />
            <br />
            <b className="text-[#1F2937] text-lg">Color:</b>{" "}
            {selectedProduct.color} <br />{" "}
            <b className="text-[#1F2937] text-lg">Product Code:</b> 2210CLK
          </p>
        </div>

        <hr
          style={{
            height: "3px",
            borderWidth: "0",
            color: "#1F2937",
            backgroundColor: "#1F2937",
          }}
          className="mb-12 ml-12"
        />
        <div className="bg-gray-100 px-8 py-12">
          <h1 className="font-bold text-3xl uppercase text-center text-orange-500">
            Reviews
          </h1>
          <div className="mt-12 px-24">
            <div className="flex flex-row ">
              <div className="basis-1/3">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
              </div>
              <div className="basis-1/2">
                <b>Excellent fit</b>
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <div className="basis-1/3">Tom Mike</div>
              <div className="basis-1/2">
                <p>
                  This is a smart looking and great fitting Jacket. <br />
                  Excellent Value of Money.
                </p>
              </div>
            </div>
          </div>
          <hr
            style={{
              height: "1px",
              borderWidth: "0",
              color: "gray",
              backgroundColor: "gray",
            }}
            className="m-8 mx-24"
          />
          <div className="mt-12 px-24">
            <div className="flex flex-row ">
              <div className="basis-1/3">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
              </div>
              <div className="basis-1/2">
                <b>Excellent fit</b>
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <div className="basis-1/3">Tom Mike</div>
              <div className="basis-1/2">
                <p>
                  This is a smart looking and great fitting Jacket. <br />
                  Excellent Value of Money.
                </p>
              </div>
            </div>
          </div>
          <hr
            style={{
              height: "1px",
              borderWidth: "0",
              color: "gray",
              backgroundColor: "gray",
            }}
            className="m-8 mx-24"
          />
          <div className="mt-12 px-24">
            <div className="flex flex-row ">
              <div className="basis-1/3">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
              </div>
              <div className="basis-1/2">
                <b>Excellent fit</b>
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <div className="basis-1/3">Tom Mike</div>
              <div className="basis-1/2">
                <p>
                  This is a smart looking and great fitting Jacket. <br />
                  Excellent Value of Money.
                </p>
              </div>
            </div>
          </div>
          <hr
            style={{
              height: "1px",
              borderWidth: "0",
              color: "gray",
              backgroundColor: "gray",
            }}
            className="m-8 mx-24"
          />
          <div className="mt-12 px-24">
            <div className="flex flex-row ">
              <div className="basis-1/3">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#1F2937"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-none"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
              </div>
              <div className="basis-1/2">
                <b>Excellent fit</b>
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <div className="basis-1/3">Tom Mike</div>
              <div className="basis-1/2">
                <p>
                  This is a smart looking and great fitting Jacket. <br />
                  Excellent Value of Money.
                </p>
              </div>
            </div>
          </div>
          <hr
            style={{
              height: "1px",
              borderWidth: "0",
              color: "gray",
              backgroundColor: "gray",
            }}
            className="m-8 mx-24"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
