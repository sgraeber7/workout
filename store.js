import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import profileReducer from "./slices/profileSlice";

const reducer = {
  profile: profileReducer,
  nav: navReducer,
};

export const store = configureStore({
  reducer,
});

console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("State after dispatch: ", store.getState())
);
