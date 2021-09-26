import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../../types/redux/auth";

export const initialAuthState: AuthState = {
  token: "",
  tokenLoading: false,
};

const authSlice = createSlice({
  name: " auth",
  initialState: initialAuthState,
  reducers: {
    getToken(state: AuthState) {
      state.tokenLoading = true;
    },
    setToken(state: AuthState, action: PayloadAction<string>) {
      state.token = action.payload;
      state.tokenLoading = false;
    },
    resetToken(state: AuthState) {
      state.token = "";
      state.tokenLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

export default authSlice;
