import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  isAuth: false,
  token: "",
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = "";
      state.user = {};
    },
    updateUserProp: (state, action) => {
      state.user = {
        ...state.user,
        [action.payload.prop]: action.payload.value,
      };
    },
    updateUserInfoProp: (state, action) => {
      state.user.user_info = {
        ...state.user.user_info,
        [action.payload.prop]: action.payload.value,
      };
    },
    updateUserInfo: (state, action) => {
      state.user.user_info = {
        ...state.user.user_info,
        ...action.payload,
      };
    },
  },
});

export const authSelector = (state) => state.auth;

export default authSlice.reducer;
