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
import Checkout from "./pages/Checkout/Checkout";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import FAQs from "./pages/FAQs/FAQs";
import ShipingAndReturn from "./pages/ShipingAndReturn/ShipingAndReturn";
import AboutUs from "./pages/AboutUs/AboutUs";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/PoductDetail/ProductDetail";

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
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          ></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/FAQs" element={<FAQs />}></Route>
          <Route
            path="/shiping-and-return"
            element={<ShipingAndReturn />}
          ></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/product-detail/:id" element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
