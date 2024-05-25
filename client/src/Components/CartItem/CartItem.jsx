import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { updateCartItemQuantity, removeCartItem } from "../../store/cartSlice";
import CancelIcon from "@mui/icons-material/Cancel";

function CartItem({ item }) {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  // Update quantity if the same product is already in the cart
  useEffect(() => {

    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItems, item.id]);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => {
      const newQuantity = parseInt(prevQuantity, 10) + amount;
      return newQuantity >= 1 ? newQuantity : 1;
    });
    dispatch(
      updateCartItemQuantity({ id: item.id, quantity: quantity + amount })
    );
  };

  const handleRemoveItem = () => {
    dispatch(removeCartItem(item.id));
  };

  return (
    <div className="flex bg-gray-100 items-center m-2 border shadow relative">
      <div className="absolute top-2 right-2">
        <IconButton size="small" onClick={handleRemoveItem}>
          <CancelIcon />
        </IconButton>
      </div>
      <div
        className="p-2 md:p-3"
        style={{
          minWidth: "150px",
          maxWidth: "250px",
        }}
      >
        <img src={item.thumbnail} alt="product" className="w-full object-cover object-center h-[200px] rounded-lg" />
      </div>
      <div className="md:px-10 px-2 sm:px-8 w-[75%] py-5 space-y-4">
        <h1 className="font-bold md:text-3xl text-lg">{item.title}</h1>
        <div className="space-y-2">
          <p className="text-gray-400 text-sm md:text-medium lg:text-xl font-medium">
            Company: <span className="text-black font-normal">{item.brand}</span>
          </p>
          <p className="text-gray-400 text-sm md:text-medium lg:text-xl font-medium">
            View Certification
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold text-3xl text-gray-900 ml-4 sm:ml-0">
            Price: <span className="text-gray-500 font-normal text-[24px]">
              {item.price}/-
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
