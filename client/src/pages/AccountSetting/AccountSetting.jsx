import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import PaymentIcon from "@mui/icons-material/Payment";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RateReviewIcon from "@mui/icons-material/RateReview";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import CancelPresentationOutlinedIcon from "@mui/icons-material/CancelPresentationOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PaymentsIcon from "@mui/icons-material/Payments";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

function AccountSetting() {
  //useState for getting the user data
  const [image, setImage] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  useEffect(() => {
    const storedImage = localStorage.getItem("image");
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedPhone = localStorage.getItem("phone");

    setImage(storedImage);
    setUsername(storedUsername);
    setEmail(storedEmail);
    setPhone(storedPhone);
  }, []);

  //handlePages

  const handleButton = () => {};

  return (
    <>
      <Navbar />
      <div className="pt-32 bg-[#eef5f9]" style={{ height: "100%" }}>
        <div className="bg-white md:mx-40 sm:mx-20 mx-10 border-l-8 border-orange-400 rounded-l-lg">
          <div className="p-8">
            <div className="flex flex-wrap">
              <img
                className="w-24 h-24 mr-2 rounded-full"
                src={image}
                alt="user photo"
              />
              <div>
                <p className="text-3xl sm:text-xl md:text-2xl font-medium text-[#1F2937]">
                  {username}
                </p>
                <p className="text-gray-500 sm:text-base md:text-lg">{email}</p>
                <p className="text-gray-500 sm:text-base md:text-lg">{phone}</p>
              </div>
            </div>

            <div className="flex justify-center">
              <div
                className="mt-4 mx-8 text-center hover:cursor-pointer hover:text-orange-400"
                onClick={{ handleButton }}
              >
                <p className="text-2xl">10</p>
                <p className="text-2xl">My Wishlist</p>
              </div>
              <div
                className="mt-4 mx-8 text-center hover:cursor-pointer hover:text-orange-400"
                onClick={{ handleButton }}
              >
                <p className="text-2xl">02</p>
                <p className="text-2xl">My Orders</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white mt-4 md:mx-40 sm:mx-20 mx-10 p-8 border-l-8 border-orange-400 rounded-l-lg">
          <h1 className="text-3xl text-[#1F2937] font-medium">My Orders</h1>
          <div className="flex justify-center flex-wrap">
            <div className="text-center mt-4 mx-8 hover:cursor-pointer hover:bg-gray-100 py-4 px-8">
              <PaymentIcon sx={{ fontSize: 50, color: "gray" }} />
              <p className="font-medium text-gray-500 text-xl">To Pay</p>
            </div>
            <div className="text-center mt-4 mx-8 hover:cursor-pointer hover:bg-gray-100 py-4 px-8">
              <InventoryIcon sx={{ fontSize: 50, color: "gray" }} />
              <p className="font-medium text-gray-500 text-xl">To Ship</p>
            </div>
            <div className="text-center mt-4 mx-8 hover:cursor-pointer hover:bg-gray-100 py-4 px-8">
              <LocalShippingIcon sx={{ fontSize: 50, color: "gray" }} />
              <p className="font-medium text-gray-500 text-xl">To Receive</p>
            </div>
            <div className="text-center mt-4 mx-8 hover:cursor-pointer hover:bg-gray-100 py-4 px-8">
              <RateReviewIcon sx={{ fontSize: 50, color: "gray" }} />
              <p className="font-medium text-gray-500 text-xl">To Review</p>
            </div>
          </div>
          <div className="flex justify-center flex-wrap">
            <div className="flex items-center text-center mt-4 mx-8 hover:cursor-pointer hover:bg-gray-100 p-2">
              <KeyboardReturnOutlinedIcon
                sx={{ fontSize: 40, color: "gray" }}
              />
              <p className="font-medium text-gray-500 text-lg ml-4">
                My Returns
              </p>
            </div>
            <div className="flex items-center text-center mt-4 mx-8 hover:cursor-pointer hover:bg-gray-100 p-2">
              <CancelPresentationOutlinedIcon
                sx={{ fontSize: 40, color: "gray" }}
              />
              <p className="font-medium text-gray-500 text-lg ml-4">
                My Cancelations
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white mt-4 md:mx-40 sm:mx-20 mx-10 p-8 border-l-8 border-orange-400 rounded-l-lg">
          <h1 className="text-3xl text-[#1F2937] font-medium">My Services</h1>
          <div className="flex justify-center flex-wrap">
            <div className="text-center mt-4 mx-8 hover:cursor-pointer hover:bg-gray-100 py-4 px-8">
              <EmailIcon sx={{ fontSize: 50, color: "gray" }} />
              <p className="font-medium text-gray-500 text-xl">My Messages</p>
            </div>
            <div className="text-center mt-4 mx-8 hover:cursor-pointer hover:bg-gray-100 py-4 px-8">
              <PaymentsIcon sx={{ fontSize: 50, color: "gray" }} />
              <p className="font-medium text-gray-500 text-xl">
                Payment Options
              </p>
            </div>
            <div className="text-center mt-4 mx-8 hover:cursor-pointer hover:bg-gray-100 py-4 px-8">
              <ContactSupportIcon sx={{ fontSize: 50, color: "gray" }} />
              <p className="font-medium text-gray-500 text-xl">Help Center</p>
            </div>
            <div className="text-center mt-4 mx-8 hover:cursor-pointer hover:bg-gray-100 py-4 px-8">
              <HeadsetMicIcon sx={{ fontSize: 50, color: "gray" }} />
              <p className="font-medium text-gray-500 text-xl">
                Customer Service
              </p>
            </div>
            <div className="text-center mt-4 mx-8 hover:cursor-pointer hover:bg-gray-100 py-4 px-8">
              <RateReviewIcon sx={{ fontSize: 50, color: "gray" }} />
              <p className="font-medium text-gray-500 text-xl">My Reviews</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AccountSetting;
