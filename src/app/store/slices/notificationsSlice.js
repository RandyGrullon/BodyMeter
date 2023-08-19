import { createSlice } from "@reduxjs/toolkit";

import { loadNotificationsThunk } from "../actions/notifications";

const notiInitialState = { isLoading: false, notifications: [] };

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: notiInitialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase([refreshNotificationsThunk.pending], (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase([refreshNotificationsThunk.fulfilled], (state, action) => {
  //       state.isLoading = false;
  //       state.notifications = action.payload;
  //     });
  // },
  extraReducers: {
    [loadNotificationsThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [loadNotificationsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.notifications = action.payload;
    },
  },
});

export const notificationsSelector = (state) => state.notifications;
