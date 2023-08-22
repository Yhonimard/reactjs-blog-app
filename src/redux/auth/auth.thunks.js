import { redirect } from "react-router-dom";
import api from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const authThunks = () => {
//   // const register = (userData) => {
//   //   return async (dispatch) => {
//   //     const { username, confirmPassword } = userData;
//   //     const data = {
//   //       username,
//   //       password: confirmPassword,
//   //     };
//   //     try {
//   //       const res = await api.request.post(`/auth/register`, data);
//   //       console.log(res);
//   //       return redirect("?mode=login");
//   //     } catch (error) {
//   //       throw new Error(error.message);
//   //     }
//   //   };
//   // };
//   // const login = (data) => {
//   //   return async () => {
//   //     try {
//   //       const res = await api.request
//   //         .post("/auth/login", data)
//   //         .catch((error) => {
//   //           console.log(error);
//   //         });
//   //       console.log("res :>> ", res);
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   };
//   // };
//   // return {
//   //   register,
//   //   login,
//   // };

//   const register = createAsyncThunk(
//     "auth/register",
//     async (data, { rejectWithValue }) => {
//       try {
//         const res = await api.request.post("/auth/register", data);
//         return res.data;
//       } catch (error) {
//         return rejectWithValue(error.response.data);
//       }
//     }
//   );

//   const login = createAsyncThunk(
//     "auth/login",
//     async (data, { rejectWithValue }) => {
//       try {
//         const res = await api.request.post("/auth/login", data);
//         return res.data;
//       } catch (error) {
//         return rejectWithValue(error.response.data);
//       }
//     }
//   );

//   return {
//     register,
//     login,
//   };
// };

const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.request.post("/auth/register", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.request.post("/auth/login", data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export default {
  register,
  login,
};
