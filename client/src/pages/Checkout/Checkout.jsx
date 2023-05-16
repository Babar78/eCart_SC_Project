import React from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "../../Components/CheckoutForm/CheckoutForm";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import CartItem from "../../Components/CartItem/CartItem";
import { Divider } from "@mui/material";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const calculateSubtotal = () => {
    if (cartItems.length === 0) {
      return 0;
    }

    return cartItems.reduce((subtotal, item) => {
      const itemTotal = item.price * item.quantity;
      return subtotal + itemTotal;
    }, 0);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap-reverse mt-20">
        <div className="flex-1 mt-10 ml-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <p>No items in the cart</p>
          )}
        </div>
        <div className="md:w-full lg:w-1/3">
          <div className="p-2 lg:p-4 md:px-48 mt-20">
            <h1 className="font-bold text-[#1F2937] text-xl">Order Summary</h1>
            <div className="flex justify-between items-center px-4 mt-4">
              <p className="text-black font-medium">Subtotal:</p>
              <p className="font-medium text-gray-400">
                ${calculateSubtotal().toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between items-center px-4 mb-2">
              <p className="text-black font-medium">Discount:</p>
              <p className="font-medium text-gray-400">$0.00 (0%)</p>
            </div>
            <Divider sx={{ marginRight: 2, marginLeft: 2 }} />
          </div>
          <CheckoutForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
