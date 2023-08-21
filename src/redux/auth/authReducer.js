import { createSlice } from "@reduxjs/toolkit";

const authReducer = createSlice({
  name: "auth",
  initialState: {
    token: null,
    username: null,
    isLogin: false,
    isSuccess: false,
  },
  reducers: {
    setIsLogin: (state, payload) => {},

    setIsSuccess: (state, { payload }) => {
      state.isSuccess = payload;
    },
  },
});

export const { setIsLogin, setIsSuccess } = authReducer.actions;

export default authReducer;
