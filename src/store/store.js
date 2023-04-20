import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSLice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
  },
});
