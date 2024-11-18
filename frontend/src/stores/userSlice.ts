import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "@/utils/authentications";

const LOCAL_STORAGE_KEY = "userState";

export interface UserState {
  _id: number;
  username: string;
  email: string;
  role: string;
  access_token: string;
  loading: boolean;
  error: string | null;
}
const initialState: UserState = {
  _id: 0,
  username: "",
  email: "",
  role: "",
  access_token: "",
  loading: false,
  error: null,
};

//Cargamos de Local storage si existe
const loadState = (): UserState => {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return initialState;
  }
};

export const loginUserState = createAsyncThunk(
  "user/loginUserState",
  loginUser
);

export const userSlice = createSlice({
  name: "user",
  initialState: loadState(),
  reducers: {
    logout: () => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return initialState;
    },
    restoreState: () => {
      const savedState = loadState();
      return savedState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserState.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUserState.fulfilled,
        (state, action: PayloadAction<UserState>) => {
          state.loading = false;
          state._id = action.payload._id;
          state.username = action.payload.username;
          state.email = action.payload.email;
          state.role = action.payload.role;
          state.access_token = action.payload.access_token;
        }
      )
      .addCase(loginUserState.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Login failed";
      });
  },
});

export const { logout, restoreState } = userSlice.actions;
export default userSlice.reducer;
