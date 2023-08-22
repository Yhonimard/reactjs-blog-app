import { createSlice } from "@reduxjs/toolkit";
import auth from ".";

const authReducer = createSlice({
  name: "auth",
  initialState: {
    data: {
      token: null,
      username: null,
      isLogin: false,
    },
    isLoading: false,
    isSuccess: false,
    isError: false,
  },

  reducers: {
    setIsLogin: (state, payload) => {},
    setIsSuccess: (state, { payload }) => {},
  },
  // extraReducers: {
  // [register.pending](state, actions) {
  // },
  // },
  extraReducers(builder) {
    builder.addCase(auth.request.register.pending, (state, { payload }) => {
      console.log("payload pending :>> ", payload);
      state.isLoading = true;
    });

    builder.addCase(auth.request.register.fulfilled, (state, { payload }) => {
      console.log("payload fulfilled :>> ", payload);
      const {
        token,
        data: { username },
      } = payload;

      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(auth.request.register.rejected, (state, { payload }) => {
      console.log("payload rejected :>> ", payload);
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });

    builder.addCase(auth.request.login.pending, (state, { payload }) => {
      console.log("payload pending :>> ", payload);
      state.isLoading = true;
    });

    builder.addCase(auth.request.login.fulfilled, (state, { payload }) => {
      console.log("payload fulfilled :>> ", payload);
      const {
        token,
        data: { username },
      } = payload;

      state.data.token = token;
      state.data.username = username;
      state.data.isLogin = true;

      state.isLoading = false;
      state.isSuccess = true;
    });

    builder.addCase(auth.request.login.rejected, (state, { payload }) => {
      console.log("payload rejected :>> ", payload);
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    });
  },
});

export default authReducer;
