import { configureStore } from "@reduxjs/toolkit";
import post from "./Components/Features/PostSlicer";
import CartReducer from "./Components/Features/FavSlicer";
export const store = configureStore({
  reducer: {
    postSlicer: post,
    cart: CartReducer,
  },
});
