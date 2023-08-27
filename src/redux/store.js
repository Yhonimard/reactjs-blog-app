import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from "./persist/auth.persist";
import rootPersist from "./persist/root.persist";

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    root: rootPersist,
  },
  middleware: (extraMiddleWare) =>
    extraMiddleWare({
      serializableCheck: false,
    }),
});
export default store;
