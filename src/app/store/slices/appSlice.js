import { createSlice } from "@reduxjs/toolkit";

import { toggleScrolling } from "../../shared/utils";

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
      toggleScrolling();
      state.mobileMenuIsVisible = !state.mobileMenuIsVisible;
    },
    toggleNotificationsMenu: (state) => {
      toggleScrolling();
      state.notificationsMenuIsVisible = !state.notificationsMenuIsVisible;
    },
    toggleAppLoading: (state) => {
      toggleScrolling();
      state.appLoading = !state.appLoading;
    },
    toggleArrgTypeModal: (state) => {
      toggleScrolling();
      state.showArrgTypeModal = !state.showArrgTypeModal;
    },
  },
});

export const appSelector = (state) => state.app;
