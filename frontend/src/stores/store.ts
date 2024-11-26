// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
