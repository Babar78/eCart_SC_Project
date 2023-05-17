import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    shippingAddress: {},
    paymentMethod: "",
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((x) => x.id === item.id);
      const quantityToAdd = item.quantity || 1; // Set default quantity to 1 if not provided
      if (existingItem) {
        existingItem.quantity += quantityToAdd;
      } else {
        state.cartItems.push({ ...item, quantity: quantityToAdd });
      }
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === id);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },
  },
});

export const { addToCart, updateCartItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
