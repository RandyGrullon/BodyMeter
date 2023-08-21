// actions/auth.js
import { authSlice } from "../reducers/authSlice";
import axios from "axios"; // Import axios for making API requests

export const { login, logout, updateUserProp, updateUserInfo, updateUserInfoProp } = authSlice.actions;

export const loginActionThunk = (data) => async (dispatch) => {
  try {
    const response = await axios.post("your-api-url/login", {
      email: data.email,
      password: data.password,
    });

    const { token, user } = response.data;

    // Update axios headers with token for future requests
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    const loginData = {
      token,
      user: {
        ...user,
        isResponsible: user.role_id === 2,
        arrangementCreationEnabled:
          user.user_info.can_belong_to_arrangement || false,
        user_info: replaceNullValues(user.user_info),
      },
    };

    const { id } = loginData.user;
    dispatch({ user_receiver_id: id });
    dispatch(login(loginData));
  } catch (error) {
    console.error(error.message);
  }
};

export const logoutActionThunk = () => (dispatch) => {
  // Clear the authorization token in axios headers
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
