// reducers/appSlice.js
import { createSlice } from "@reduxjs/toolkit";

const appInitialState = {
  mobileMenuIsVisible: false,
  appLoading: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuIsVisible = !state.mobileMenuIsVisible;
    },
    toggleAppLoading: (state) => {
      state.appLoading = !state.appLoading;
    },
  },
});

export const appSelector = (state) => state.app;
