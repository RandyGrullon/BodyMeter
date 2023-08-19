import { authSlice } from "../slices/authSlice";
import axios from "../../axios.config";
import { loadNotificationsThunk } from "./notifications";
import { replaceNullValues } from "../../shared/utils";

export const {
  login,
  logout,
  updateUserProp,
  updateUserInfo,
  updateUserInfoProp,
} = authSlice.actions;

export const loginActionThunk = (data) => async (dispatch) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

  const loginData = {
    ...data,
    user: {
      ...data.user,
      isResponsible: data.user.role_id === 2,
      arrangementCreationEnabled:
        data.user.user_info.can_belong_to_arrangement || false,
      user_info: replaceNullValues(data.user.user_info),
    },
  };
  const { id } = loginData.user;
  dispatch(
    loadNotificationsThunk({
      user_receiver_id: id,
    })
  );
  dispatch(login(loginData));
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
