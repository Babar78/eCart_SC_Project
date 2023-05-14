import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import TrackOrder from "./pages/TrackOrder/TrackOrder";
import ContactUs from "./pages/ContactUs/ContactUs";
import Profile from "./pages/Profile/Profile";
import AccountSetting from "./pages/AccountSetting/AccountSetting";
import EditProfile from "./pages/EditProfile/EditProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/trackorder" element={<TrackOrder />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/account" element={<AccountSetting />}></Route>
          <Route path="/editprofile" element={<EditProfile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
