import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);

      if (index !== -1) {
        state.items.splice(index, 1);
      }

      state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }

      state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    clearCart(state) {
  state.items = [];
  state.totalAmount = 0;
}
    
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectTotalPrice = (state) => state.cart.totalAmount;

export default cartSlice.reducer;

