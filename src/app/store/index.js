"use client"
 import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistCombineReducers,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { appSlice } from "./slices/appSlice";
import { authSlice } from "./slices/authSlice";

const config = {
  key: "root",
  version: 1,
  storage,
  // slices that should not be saved in storage when the page is refreshed
  blacklist: ["app"],
};

const makeStore = () => {
  // add your reducers slices here
  const reducers = {
    [authSlice.name]: authSlice.reducer,
    [appSlice.name]: appSlice.reducer,
  };

  const persistedReducer = persistCombineReducers(config, reducers);

  const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoreActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
        },
      }),
  });
  const persistor = persistStore(store);
  return { current: store, _persistor: persistor };
};

const store = makeStore();

export default store;

