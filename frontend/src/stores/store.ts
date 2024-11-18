import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { user: userReducer },
});

// Infer the type of `store`

export type RootState = ReturnType<typeof store.getState>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
