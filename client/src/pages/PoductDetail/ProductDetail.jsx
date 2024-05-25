import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Tooltip from '@mui/material/Tooltip';

import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

import products from "../../../data";

import img1 from "../../assets/mobiles/1.png";
import img2 from "../../assets/mobiles/2.png";
import img3 from "../../assets/mobiles/3.png";
import img4 from "../../assets/mobiles/4.png";
import img5 from "../../assets/mobiles/5.png";
import img6 from "../../assets/mobiles/6.png";


function ProductDetail() {

  const { id } = useParams();

  const [activeProduct, setActiveProduct] = useState("image6");

  // Retrieve the selected product information based on the ID
  const selectedProduct = products.find(
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

  console.log(activeProduct);

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
                className="h-full overflow-auto flex justify-center"
              >
                <img src={`
                ${activeProduct === "image1" ? `${img1}`
                    : activeProduct === "image2" ? `${img2}`
                      : activeProduct === "image3" ? `${img3}`
                        : activeProduct === "image4" ? `${img4}`
                          : activeProduct === "image5" ? `${img5}`
                            : activeProduct === "image6" ? `${img6}`
                              : `${img6}`
                  }
                `} alt="" />
                <div className="h-full bg-black opacity-25"></div>
              </div>
            </div>
            <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                  {/* Maison Riviera Plain */}
                  Samsung Galaxy S21 Ultra 5G
                </h2>
                <p className="text-gray-400 mt-2">
                  {selectedProduct.description}
                </p>
                <p className="mt-2 text-3xl font-bold text-orange-500">
                  PKR {selectedProduct.price}/-
                </p>
                <div className="flex">
                  {
                    // Display the rating stars based on the rating value
                    Array.from({ length: selectedProduct.rating }, (_, index) => (
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
                    ))

                  }
                  {
                    // Display the empty stars based on the remaining rating value
                    Array.from({ length: 5 - selectedProduct.rating }, (_, index) => (
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
                    ))
                  }
                </div>

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
                  <img
                    src={img6}
                    className="w-20 h-20 object-contain object-center rounded-lg cursor-pointer mx-2"
                    alt="product"
                    onClick={() => setActiveProduct("image6")}
                  /><img
                    src={img5}
                    className="w-20 h-20 object-contain object-center rounded-lg cursor-pointer mx-2"
                    alt="product"
                    onClick={() => setActiveProduct("image5")}
                  /><img
                    src={img4}
                    className="w-20 h-20 object-contain object-center rounded-lg cursor-pointer mx-2"
                    alt="product"
                    onClick={() => setActiveProduct("image4")}
                  /><img
                    src={img3}
                    className="w-20 h-20 object-contain object-center rounded-lg cursor-pointer mx-2"
                    alt="product"
                    onClick={() => setActiveProduct("image3")}
                  /><img
                    src={img2}
                    className="w-20 h-20 object-contain object-center rounded-lg cursor-pointer mx-2"
                    alt="product"
                    onClick={() => setActiveProduct("image2")}
                  /><img
                    src={img1}
                    className="w-20 h-20 object-contain object-center rounded-lg cursor-pointer mx-2"
                    alt="product"
                    onClick={() => setActiveProduct("image1")}
                  />
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
            Brand:	Samsung	<br />
            Model: S21 Ultra 5G <br />
            Regulatory Model Number: SM-G998B/DS <br />
            Color: Black <br />
            IMEI 1: 567123489012345 <br />
            IMEI 2: 512123434567890 <br />
            Serial Number: S9DMA48VTQW <br />
            Country of Origin: UAE <br />
            <br />
            Camera Resolution: 108 MP <br />
            Screen: 6.8” <br />

            Memory capacity: 256 GB <br />

            Battery Capacity: 5000 mAh <br />

          </p>
          <br />
          <p>
            <b className="text-[#1F2937] text-lg">Color:</b>{" "}
            Black <br />{" "}
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
            Certification
          </h1>
          <div className="mt-12 px-24 text-center">

            <Tooltip title="The devices are unlocked, pass all TruMobile tests, and are fully functional. They look new. They appear flawless at first glance and are in very good condition. They have very slight signs of use.">
              <b className="text-blue-800">
                GRADE A
              </b>
            </Tooltip>

            <br />

            Reported Lost or Stolen: No <br />
            Carrier Lock: No <br />
            Device Lock: No <br />
            Repair History: None Detected <br />
            Securely Erased: Yes <br /> <br />

            Camera Focus: Working <br />
            Picture/Video: No Defects <br />
            Screen Sensitivity: 9/10 <br />
            Dead Pixels: None <br />
            Display Brightness: OK <br /> <br />


            Battery Health: 94% <br />
            Charging: OK <br />
            Buttons: OK <br />
            SIM card reading & call: OK <br />
            GPS sensor: OK <br />
            Speaker: OK <br />
            Earphone Port: No Built-in Support <br />
            Flashlight: OK <br />
            Fingerprint: OK <br />
            Face ID: OK <br />
            Microphone: OK <br />
            Proximity / light sensors: OK <br />
            SD Card: OK <br />
            Vibration motor: OK <br />
            Accelerometer: OK <br />
            FMIP status: OK <br />
            Bluetooth: OK <br />
            WIFI: OK <br />
            2G/3G/4G/5G network: All Supported & Working <br /> <br />


            <b className="text-blue-800">Physical Inspection Report</b> <br />
            Blue - Hairline Scratch <br />
            Red - Deep Scratch <br />
            Black - Severe Damage <br />
            Note*: Each Scratch marked on the phone is shown above (If applicable). <br />

          </div>
        </div>
      </div >
      <Footer />
    </>
  );
}

export default ProductDetail;
