import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
