import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "auth",
  initialState: {
    token: null,
    username: null,
    isLogin: null,
  },
  reducers: {
    setIsLogin: (state, payload) => {},
  },
});

export default authReducer;
