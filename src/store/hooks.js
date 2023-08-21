// store/hooks.js
import { useSelector } from "react-redux";
import { appSelector } from "./reducers/appSlice";
import { authSelector } from "./reducers/authSlice";

export const useAuthState = () => useSelector(authSelector);
export const useAppState = () => useSelector(appSelector);
