import { useSelector } from "react-redux";

import { appSelector } from "./slices/appSlice";
import { authSelector } from "./slices/authSlice";
import { notificationsSelector } from "./slices/notificationsSlice";

export const useAuthState = () => useSelector(authSelector);

export const useAppState = () => useSelector(appSelector);

export const useNotifications = () => useSelector(notificationsSelector);
