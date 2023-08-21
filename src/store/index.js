// store/index.js

import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistCombineReducers, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { appSlice } from "./reducers/appSlice";
import { authSlice } from "./reducers/authSlice";

const config = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["app"], // Slices to exclude from being persisted
};

const makeStore = () => {
  const reducers = {
    [authSlice.name]: authSlice.reducer,
    [appSlice.name]: appSlice.reducer,
  };

  const persistedReducer = persistCombineReducers(config, reducers);

  const store = configureStore({
    reducer: persistedReducer,
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

export const wrapper = createWrapper(makeStore);
