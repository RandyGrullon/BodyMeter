import { useSelector } from "react-redux";

import { appSelector } from "./slices/appSlice";
import { authSelector } from "./slices/authSlice";

export const useAuthState = () => useSelector(authSelector);

export const useAppState = () => useSelector(appSelector);

