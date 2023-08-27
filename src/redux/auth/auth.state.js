import { createSlice } from "@reduxjs/toolkit";

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
  extraReducers(builder) {},
});

export default authState;
