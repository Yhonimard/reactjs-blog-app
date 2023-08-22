import { configureStore } from "@reduxjs/toolkit";
import rootPersist from "./persist/root.persist";
import authPersist from "./persist/auth.persist";
import { PERSIST } from "redux-persist";

const store = configureStore({
  reducer: {
    // rootPersist,
    auth: authPersist,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export default store;
