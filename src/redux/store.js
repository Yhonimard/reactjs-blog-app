import { configureStore } from "@reduxjs/toolkit";
import rootPersist from "./persist/rootPersist";
import authPersist from "./persist/authPersist";
import { PERSIST } from "redux-persist";

const store = configureStore({
  reducer: {
    // rootPersist,
    authPersist,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export default store;
