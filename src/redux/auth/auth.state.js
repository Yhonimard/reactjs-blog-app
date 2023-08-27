import { createSlice } from "@reduxjs/toolkit";
import auth from ".";

const authState = createSlice({
  name: "auth",
  initialState: {
    data: {
      username: null,
      token: null,
      isAuthorized: false,
    },
    isLoading: false,
  },
  reducers: {},
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
      console.log(payload);

      const {
        token,
        data: { username },
      } = payload;

      state.data.token = token;
      state.data.isAuthorized = true;
      state.data.username = username;

      state.isLoading = false;
    });

    builder.addCase(auth.request.login.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export default authState;
