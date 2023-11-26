import { configureStore } from "@reduxjs/toolkit";
import { couterSlice } from "./slice/counterSlice";

export const store = configureStore({
  reducer: {
    counter: couterSlice.reducer,
  },
});
