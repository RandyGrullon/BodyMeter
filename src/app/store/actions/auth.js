import { authSlice } from "../slices/authSlice";
import axios from "../../axios.config";
import { loadNotificationsThunk } from "./notifications";
import { replaceNullValues } from "../../shared/utils";
import firebase from "@/app/firebase";

export const {
  login,
  logout,
  updateUserProp,
  updateUserInfo,
  updateUserInfoProp,
} = authSlice.actions;

export const loginActionThunk = (email, password) => async (dispatch) => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    // Aquí puedes mapear los datos del usuario según tu necesidad
    dispatch(login({ user }));
  } catch (error) {
    console.error(error.message);
  }
};

export const signupActionThunk = (email, password) => async (dispatch) => {
  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;
    // Aquí puedes mapear los datos del usuario según tu necesidad
    dispatch(login({ user }));
  } catch (error) {
    console.error(error.message);
  }
};

export const logoutActionThunk = () => (dispatch) => {
  axios.defaults.headers.common["Authorization"] = "";
  dispatch(logout());
};

export const updateUserThunk = (userInfo) => (dispatch) => {
  dispatch(updateUserInfo(userInfo));

  dispatch(
    updateUserProp({
      prop: "arrangementCreationEnabled",
      value: userInfo.can_belong_to_arrangement,
    })
  );
};
