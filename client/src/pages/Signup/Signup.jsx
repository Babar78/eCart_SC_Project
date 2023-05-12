import React, { useState } from "react";
import Logo from "../../assets/Logo/eCart-Logo.png";
import axios from "axios";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import AlertMessage from "../../Components/Alert/AlertMessage";
import InputField from "../../Components/InputField/InputField";
import CountryField from "../../Components/CountryField/CountryField";
import PasswordField from "../../Components/PasswordField/PasswordField";

//import Material UI Components
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/system";

function Signup() {
  //To chnage the outline of Material UI Fields

  //Show Password
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //Take Image Input
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
    setUser({ ...user, image: file });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(URL.createObjectURL(file));
  };

  //Register User
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    reEnterPassword: "",
    country: "",
    phone: "",
    address: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //CountrySelect Field
  const handleCountryChange = (value) => {
    if (value) {
      setUser({ ...user, country: value.label });
    } else {
      setUser({ ...user, country: "" });
    }
  };

  //Loading Spinner
  const [isloading, setIsLoading] = useState(false);

  //Alert useState
  const [alertText, setAlertText] = React.useState("");
  const [responseReceived, setResponseReceived] = React.useState(false);

  //Register User
  const registerUser = () => {
    setIsLoading(true);

    const {
      email,
      username,
      password,
      reEnterPassword,
      country,
      phone,
      address,
      image,
    } = user;
    if (
      email &&
      username &&
      password &&
      country &&
      address &&
      image &&
      phone &&
      password === reEnterPassword
    ) {
      const formData = new FormData();
      Object.keys(user).forEach((key) => {
        formData.append(key, user[key]);
      });

      axios
        .post("http://localhost:5000/user/register", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setIsLoading(false);
          setResponseReceived(true);
          setAlertText(res.data.message);
          setTimeout(() => {
            if (res.data.message === "Successfully Registered") {
              window.location.href = "/login";
            } else {
              null;
            }
          }, 1000);
        });
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <div className="bg-[#1F2937]" style={{ height: "100vh" }}>
      <section className="max-w-4xl px-6 mx-auto pt-10">
        {isloading && <LoadingSpinner />}
        <div className="flex justify-center">
          <img src={Logo} alt="Web Logo" className="w-72" />
        </div>
        <h1 className="text-3xl font-bold capitalize dark:text-white my-8 text-center">
          Signup
        </h1>
        <AlertMessage
          responseReceived={responseReceived}
          alertText={alertText}
        />
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            {/* <CustomTextField
              id="username"
              name="username"
              type="text"
              label="Username"
              variant="outlined"
              fullWidth
              value={user.username}
              onChange={handleChange}
            /> */}
            <InputField
              id="username"
              name="username"
              type="text"
              label="Username"
              value={user.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <InputField
              id="email"
              name="email"
              type="email"
              label="Email"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <PasswordField
              id="password"
              name="password"
              label="Password"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <PasswordField
              id="reEnterPassword"
              name="reEnterPassword"
              value={user.confirmPassword}
              label="Confirm Password"
              onChange={handleChange}
            />
          </div>
          <div>
            <CountryField
              onChange={(event, value) => handleCountryChange(value)}
            />
          </div>
          <div>
            <InputField
              id="phone"
              name="phone"
              type="phone"
              label="Phone Number"
              value={user.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <InputField
              id="address"
              name="address"
              type="text"
              label="Address"
              value={user.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mt-1 flex flex-col justify-center px-6 py-5 border-2 border-gray-300 border-dashed rounded-md">
              <div
                className="space-y-1 text-center"
                style={{
                  border: "1px dotted gray",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: selectedFile ? "150px" : "auto",
                  overflow: "hidden",
                }}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                {selectedFile ? (
                  <>
                    <img
                      src={selectedFile}
                      alt="Uploaded"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        marginBottom: "1rem",
                      }}
                    />
                  </>
                ) : (
                  <>
                    <svg
                      className="mx-auto h-12 w-12 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500 px-1 mt-2"
                      >
                        <span className="">Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleFileUpload}
                        />
                      </label>
                      <p className="pl-1 text-white">or drag and drop</p>
                    </div>
                  </>
                )}
                <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
              </div>
              {selectedFile ? (
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500 px-1 mt-2"
                  >
                    <span className="">Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileUpload}
                    />
                  </label>
                  <p className="pl-1 mt-2 text-white">or drag and drop</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex justify-start my-6">
          <button
            className="px-6 py-2 w-full leading-5 text-white transition-colors duration-200 transform bg-[#F79015] rounded-md hover:bg-[#C67D12] focus:outline-none focus:bg-gray-600"
            onClick={registerUser}
          >
            Register
          </button>
        </div>
      </section>
    </div>
  );
}

export default Signup;
