import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

export function createStore() {
  return configureStore({
    reducer: {
      user: UserSlice,
    },
    devTools: true,
  });
}

export const store = createStore();
