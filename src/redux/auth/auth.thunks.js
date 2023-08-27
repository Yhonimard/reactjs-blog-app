import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.request.post("/auth/register", data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.request.post("/auth/login", data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export default {
  register,
  login,
};
