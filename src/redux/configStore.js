import { configureStore } from "@reduxjs/toolkit";
import authSlide from "./authSlice";
export const store = configureStore({
  reducer: {
    authSlide,
  },
});
