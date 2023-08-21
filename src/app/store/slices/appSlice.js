"use client" 
import { createSlice } from "@reduxjs/toolkit";


const appInitialState = {
  mobileMenuIsVisible: false,
  notificationsMenuIsVisible: false,
  appLoading: true,
  showArrgTypeModal: false
};

export const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuIsVisible = !state.mobileMenuIsVisible;
    },
    toggleNotificationsMenu: (state) => {
      state.notificationsMenuIsVisible = !state.notificationsMenuIsVisible;
    },
    toggleAppLoading: (state) => {
      state.appLoading = !state.appLoading;
    },
    toggleArrgTypeModal: (state) => {
      state.showArrgTypeModal = !state.showArrgTypeModal;
    },
  },
});

export const appSelector = (state) => state.app;
