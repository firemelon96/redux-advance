import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    notification: null,
  },
  reducers: {
    toggle: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const { toggle, showNotification } = uiSlice.actions;

export const selectUICart = (state) => state.ui.cartIsVisible;

export const selectUINotification = (state) => state.ui.notification;

export default uiSlice.reducer;
