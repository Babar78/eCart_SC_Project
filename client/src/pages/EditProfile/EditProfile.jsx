import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Divider } from "@mui/material";
import TextField from "@mui/material/TextField";
import ImageUploadField from "../../Components/ImageUploadField/ImageUploadField";

import axios from "axios";

function EditProfile() {
  //useState for getting the user data
  const [image, setImage] = React.useState(null);
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userId, setUserId] = React.useState("");

  useEffect(() => {
    const storedImage = localStorage.getItem("image");
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedPhone = localStorage.getItem("phone");
    const storedCountry = localStorage.getItem("country");
    const storedAddress = localStorage.getItem("address");
    const storedPassword = localStorage.getItem("password");
    const storedUserId = localStorage.getItem("userId");

    setImage(storedImage);
    setUsername(storedUsername);
    setEmail(storedEmail);
    setPhone(storedPhone);
    setCountry(storedCountry);
    setAddress(storedAddress);
    setPassword(storedPassword);
    setUserId(storedUserId);
  }, []);

  //Get the current value in the input field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "image":
        setImage(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  //Take Image Input
  const [selectedFile, setSelectedFile] = React.useState(null);

  const [newImage, setNewImage] = React.useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
    setNewImage(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(URL.createObjectURL(file));
  };

  //updateProfile
  const updateProfile = () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("country", country);
    if (selectedFile) {
      formData.append("image", newImage);
    } else {
      // Retrieve the image URL from local storage
      formData.append("image", image);
    }

    axios
      .post(`http://localhost:5000/user/updateProfile/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        localStorage.setItem("username", res.data.user.username);
        localStorage.setItem("email", res.data.user.email);
        localStorage.setItem("password", res.data.user.password);
        localStorage.setItem("country", res.data.user.country);
        localStorage.setItem("address", res.data.user.address);
        localStorage.setItem("phone", res.data.user.phone);
        localStorage.setItem("image", res.data.user.image); // Update the image URL in local storage
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 bg-[#eef5f9]" style={{ height: "100%" }}>
        <div className="md:mx-40 sm:mx-20 m-10 shadow">
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
                <p className="sm:text-base md:text-lg text-white">
                  {localStorage.getItem("email")}
                </p>
                <p className="sm:text-base md:text-lg text-white">
                  {localStorage.getItem("phone")}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="sm:text-base md:text-lg text-white">
                {localStorage.getItem("address")},{" "}
                {localStorage.getItem("country")}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-tl-lg p-8">
            <p className="text-2xl text-[#2A72B8] font-md mb-2">Edit Profile</p>
            <Divider />
            <div className="flex flex-between md:flex-wrap lg:flex-nowrap p-8 gap-x-16 gap-y-4">
              <TextField
                id="username"
                label="Username"
                name="username"
                variant="filled"
                value={username}
                className="w-full"
                onChange={handleInputChange}
              />
              <TextField
                id="phone"
                label="Phone"
                name="phone"
                variant="filled"
                value={phone}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-between md:flex-wrap lg:flex-nowrap p-8 gap-x-16 gap-y-4">
              <TextField
                id="email"
                label="Email"
                name="email"
                variant="filled"
                value={email}
                className="w-full"
                onChange={handleInputChange}
              />
              <TextField
                id="password"
                label="Password"
                name="password"
                variant="filled"
                value={password}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-between md:flex-wrap lg:flex-nowrap p-8 gap-x-16 gap-y-4">
              <TextField
                id="address"
                label="address"
                name="address"
                variant="filled"
                value={address}
                className="w-full"
                onChange={handleInputChange}
              />
              <TextField
                id="country"
                label="Country"
                name="country"
                variant="filled"
                value={country}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>
            <p className=" text-2xl text-[#2A72B8] font-md mb-2">
              Edit Profile Picture
            </p>
            <Divider />
            <div
              id="Profile-Picture-Div"
              className="flex md:flex-wrap lg:flex-nowrap p-8 mt-4 justify-center"
            >
              <div className="bg-[#1F2937] p-2 rounded">
                <ImageUploadField
                  selectedFile={selectedFile}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onChange={handleFileUpload}
                />
              </div>
            </div>
            <button
              className="bg-transparent hover:bg-[#1F2937] text-[#1F2937] font-semibold hover:text-white py-2 px-4 border border-[#1F2937] hover:border-transparent rounded w-full"
              onClick={updateProfile}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
