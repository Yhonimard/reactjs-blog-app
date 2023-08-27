import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from "./persist/auth.persist";

const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (extraMiddleWare) =>
    extraMiddleWare({
      serializableCheck: false,
    }),
});
export default store;
