// src/store/features/auth/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCookies, clearCookies, getUserFromCookies } from "@/utils/cookies";
import { redirect } from "next/navigation";

interface User {
  access_token: string;
  email: string;
  role: "user" | "seller" | "admin" | "superadmin";
  username: string;
  _id: string;
}
interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}
interface LoginPayload {
  user: User;
  token: string;
}

// Initialize state with cookies if they exist
const userFromCookies = getUserFromCookies();

const initialState: AuthState = {
  isAuthenticated: !!userFromCookies,
  user: userFromCookies,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<LoginPayload>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      // Set cookies when logging in
      setCookies(user, token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      // Clear cookies when logging out
      clearCookies();
      redirect("/login");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
