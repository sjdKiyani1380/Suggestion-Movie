import { createSlice } from "@reduxjs/toolkit";
import { AuthState, TokenModel } from "./authSlice.model";
import jwtDecode from "jwt-decode";

export const initialState: AuthState = {
  token: null,
  email: null,
  exp: null,
  iat: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      //decoded token
      const token: TokenModel = jwtDecode(action.payload);
      //save to local storage
      localStorage.setItem("token", action.payload);
      localStorage.setItem("email", token.email);
      localStorage.setItem("exp", token.exp.toString());
      localStorage.setItem("iat", token.iat.toString());
      //save to state reducer
      state.token = action.payload;
      state.email = token.email;
      state.exp = token.exp;
      state.iat = token.iat;
    },

    logOut: (state) => {
      localStorage.clear();
      state.token = null;
      state.email = null;
      state.exp = null;
      state.iat = null;
    },

    checkAuth: (state) => {
      const token = localStorage.getItem("token");
      if (!token) {
        logOut();
      } else {
        const getExp: any = localStorage.getItem("exp");
        const getIat: any = localStorage.getItem("iat");
        const expNumber = parseInt(getExp);
        const iatNumber = parseInt(getIat);
        const expireDate = new Date(expNumber * 1000);
        if (expireDate <= new Date()) {
          logOut();
        } else {
          state.token = localStorage.getItem("token");
          state.email = localStorage.getItem("email");
          state.iat = iatNumber;
          state.exp = expNumber;
        }
      }
    },
  },
});

export const { setUser, logOut , checkAuth } = authSlice.actions;
export default authSlice.reducer;
