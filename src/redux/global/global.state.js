import { createSlice } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";

const globalState = createSlice({
  name: "global",
  initialState: {},
  reducers: {
    showNotification(state, { payload }) {
      enqueueSnackbar({ message: payload.message, variant: payload.status });
    },
  },
});

export default globalState;
