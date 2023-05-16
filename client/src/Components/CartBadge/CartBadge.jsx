import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import DrawerItem from "../DrawerItem/DrawerItem";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    border: `5px solid #1F2937`,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "24px",
    height: "24px",
    padding: 0,
  },
}));

function CartBadge() {
  const [open, setOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const calculateSubtotal = () => {
    if (cartItems.length === 0) {
      return 0;
    }

    return cartItems.reduce((subtotal, item) => {
      const itemTotal = item.price * item.quantity;
      return subtotal + itemTotal;
    }, 0);
  };

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  const list = (
    <Box
      sx={{
        width: 450,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      role="presentation"
    >
      <div className="flex items-center shadow">
        <div
          className="p-1 mx-4 flex-1 rounded-full hover:bg-gray-200"
          onClick={toggleDrawer(false)}
        >
          <ArrowBackIosNewRoundedIcon />
        </div>
        <div className="text-center w-full">
          <h1 className="font-bold text-3xl text-center p-4 text-[#1F2937]">
            My Cart
          </h1>
        </div>
      </div>
      <div
        className="overflow-auto"
        style={{ flex: "1", maxHeight: "calc(100vh - 250px)" }}
      >
        {cartItems.map((item) => (
          <DrawerItem key={item.id} item={item} />
        ))}
      </div>
      <div className="bg-white p-4 mt-auto border-t-4 border-gray-900 rounded-tl-lg">
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
        <Link to="/checkout">
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 w-full mt-4">
            Proceed to Pay
          </button>
        </Link>
      </div>
    </Box>
  );

  return (
    <>
      <IconButton aria-label="cart" onClick={toggleDrawer(true)}>
        <StyledBadge badgeContent={totalQuantity} color="error">
          <ShoppingCartIcon sx={{ color: "white", fontSize: 40 }} />
        </StyledBadge>
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list}
      </SwipeableDrawer>
    </>
  );
}
export default CartBadge;
