import { createSlice } from "@reduxjs/toolkit";
import auth from ".";

const authReducer = createSlice({
  name: "auth",
  initialState: {
    data: {
      token: null,
      username: null,
      isAuthenticated: false,
    },
    isLoading: false,
  },

  reducers: {
    setIsLogin: (state, payload) => {},
    setIsSuccess: (state, { payload }) => {},
  },

  extraReducers(builder) {
    builder.addCase(auth.request.register.pending, (state, { payload }) => {
      state.isLoading = true;
    });

    builder.addCase(auth.request.register.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    });

    builder.addCase(auth.request.register.rejected, (state, { payload }) => {
      state.isLoading = false;
    });

    builder.addCase(auth.request.login.pending, (state, { payload }) => {
      state.isLoading = true;
    });

    builder.addCase(auth.request.login.fulfilled, (state, { payload }) => {
      const {
        token,
        data: { username },
      } = payload;

      state.data.token = token;
      state.data.username = username;
      state.data.isAuthenticated = true;

      state.isLoading = false;
    });

    builder.addCase(auth.request.login.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export default authReducer;
