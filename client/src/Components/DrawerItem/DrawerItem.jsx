import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { updateCartItemQuantity, removeCartItem } from "../../store/cartSlice";
import CancelIcon from "@mui/icons-material/Cancel";

function DrawerItem({ item }) {

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
      <div className="p-2" style={{ minWidth: "200px" }}>
        <img src={item.thumbnail} alt="Item Selected" className="w-full object-cover object-center h-[200px] rounded-lg" />
      </div>
      <div className="absolute top-1 right-0">
        <IconButton size="small" onClick={handleRemoveItem}>
          <CancelIcon />
        </IconButton>
      </div>
      <div className="w-1/2">

        <h1 className="font-bold">{item.title}</h1>
        <div className="my-4">
          <p className="text-gray-400 text-medium font-medium">
            Company:
            <span className="text-black font-normal">{item.brand}</span>
          </p>
          <p className="text-gray-400 text-medium font-medium">
            Rating: <span className="text-black font-normal">{item.rating}</span>
          </p>
        </div>
        <div className="flex justify-between items-center px-1 mb-2">
          <p className="font-bold text-2xl text-gray-900">{item.price}/-</p>
        </div>
      </div>
    </div>
  );
}

export default DrawerItem;
