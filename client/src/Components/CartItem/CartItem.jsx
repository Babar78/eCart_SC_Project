import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { updateCartItemQuantity } from "../../store/cartSlice";

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

  return (
    <div className="flex bg-gray-100 items-center m-2 border shadow">
      <div
        className="p-2 md:p-3"
        style={{
          minWidth: "150px",
          maxWidth: "250px",
        }}
      >
        <img src={item.image} alt="" />
      </div>
      <div className="md:px-10 px-2 sm:px-8 my-2 w-full mr-20">
        <h1 className="font-bold md:text-3xl text-lg">{item.description}</h1>
        <div className="sm:flex my-8 sm:flex-wrap justify-between">
          <p className="text-gray-400 text-sm md:text-medium lg:text-xl font-medium">
            Style: <span className="text-black font-normal">{item.style}</span>
          </p>
          <p className="text-gray-400 text-sm md:text-medium lg:text-xl font-medium">
            Size: <span className="text-black font-normal">{item.size}</span>
          </p>
          <p className="text-gray-400 text-sm md:text-medium lg:text-xl font-medium">
            Color: <span className="text-black font-normal">{item.color}</span>
          </p>
        </div>
        <div className="flex justify-between items-center mt-4 md:mt-10">
          <div className="flex bg-gray-200 items-center p-1 sm:p-2">
            <IconButton size="small" onClick={() => handleQuantityChange(-1)}>
              <RemoveIcon />
            </IconButton>
            <div className="flex">
              <p className="text-gray-400 font-bold">Quantity:</p> {quantity}
            </div>
            <IconButton size="small" onClick={() => handleQuantityChange(1)}>
              <AddIcon />
            </IconButton>
          </div>
          <p className="font-bold text-3xl text-gray-900 ml-4 sm:ml-0">
            {item.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
