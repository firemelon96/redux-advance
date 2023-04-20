import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
  },
  reducers: {
    toggle: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const { toggle } = uiSlice.actions;

export const selectCart = (state) => state.ui.cartIsVisible;

export default uiSlice.reducer;
