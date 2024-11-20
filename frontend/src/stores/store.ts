// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // Adding middleware for development tools
  devTools: process.env.NODE_ENV !== "production",
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
