import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import EditIcon from "@mui/icons-material/Edit";
import { Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import BadgeIcon from "@mui/icons-material/Badge";
import LockIcon from "@mui/icons-material/Lock";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { Link } from "react-router-dom";

export default function Profile() {
  //useState for getting the user data
  const [image, setImage] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  useEffect(() => {
    const storedImage = localStorage.getItem("image");
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedPhone = localStorage.getItem("phone");
    const storedCountry = localStorage.getItem("country");
    const storedAddress = localStorage.getItem("address");
    const storedPassword = localStorage.getItem("password");

    setImage(storedImage);
    setUsername(storedUsername);
    setEmail(storedEmail);
    setPhone(storedPhone);
    setCountry(storedCountry);
    setAddress(storedAddress);
    setPassword(storedPassword);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-[#eef5f9]" style={{ height: "100%" }}>
        <div className="md:mx-40 sm:mx-20 mx-10 shadow">
          <div className="p-8 bg-[#1F2937] border-l-8 border-orange-400 rounded-l-lg">
            <div className="flex flex-wrap">
              <img
                className="w-24 h-24 mr-2 rounded-full"
                src={image}
                alt="user photo"
              />
              <div>
                <p className="text-3xl sm:text-xl md:text-2xl font-medium text-white">
                  {username}
                </p>
                <p className="text-gray-500 sm:text-base md:text-lg text-white">
                  {email}
                </p>
                <p className="text-gray-500 sm:text-base md:text-lg text-white">
                  {phone}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-tl-lg">
            <div className="flex">
              <div className="flex-1"></div>
              <Tooltip title="Edit Profile">
                <Link to={"/editprofile"}>
                  <div className="rounded-full bg-orange-400 p-1 hover:shadow-lg mr-10 -mt-6 hover:cursor-pointer">
                    <IconButton>
                      <EditIcon sx={{ color: "white", fontSize: 30 }} />
                    </IconButton>
                  </div>
                </Link>
              </Tooltip>
            </div>
            <Divider sx={{ margin: 4 }} />

            <div className="px-10 pb-4">
              <p className="text-gray-500 text-lg">Contact Information</p>
              <div id="User-Info">
                <div className="flex mt-4">
                  <BadgeIcon sx={{ fontSize: 40, color: "gray" }} />
                  <div className="ml-8">
                    <p className="font-medium">{username}</p>
                    <p className="text-gray-400">Name</p>
                    <Divider sx={{ marginTop: 1, width: "270px" }} />
                  </div>
                </div>
                <div className="flex mt-4">
                  <EmailIcon sx={{ fontSize: 40, color: "gray" }} />
                  <div className="ml-8">
                    <p className="font-medium">{email}</p>
                    <p className="text-gray-400">Email</p>
                    <Divider sx={{ marginTop: 1, width: "270px" }} />
                  </div>
                </div>
                <div className="flex mt-4">
                  <LocalPhoneIcon sx={{ fontSize: 40, color: "gray" }} />
                  <div className="ml-8">
                    <p className="font-medium">{phone}</p>
                    <p className="text-gray-400">Phone</p>
                    <Divider sx={{ marginTop: 1, width: "270px" }} />
                  </div>
                </div>
                <div className="flex mt-4">
                  <HomeIcon sx={{ fontSize: 40, color: "gray" }} />
                  <div className="ml-8">
                    <p className="font-medium">{address}</p>
                    <p className="text-gray-400">Address</p>
                    <Divider sx={{ marginTop: 1, width: "270px" }} />
                  </div>
                </div>
                <div className="flex mt-4">
                  <FlagIcon sx={{ fontSize: 40, color: "gray" }} />
                  <div className="ml-8">
                    <p className="font-medium">{country}</p>
                    <p className="text-gray-400">Country</p>
                  </div>
                </div>
              </div>
              <Divider sx={{ margin: "10px 0" }} />
              <p className="text-gray-500 text-lg mt-8">Login Credentials</p>
              <div id="User-Credentials">
                <div className="flex mt-4">
                  <EmailIcon sx={{ fontSize: 40, color: "gray" }} />
                  <div className="ml-8">
                    <p className="font-medium">{email}</p>
                    <p className="text-gray-400">Email</p>
                    <Divider sx={{ marginTop: 1, width: "270px" }} />
                  </div>
                </div>
                <div className="flex mt-4">
                  <LockIcon sx={{ fontSize: 40, color: "gray" }} />
                  <div className="ml-8">
                    <p className="font-medium">{password}</p>
                    <p className="text-gray-400">Password</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
