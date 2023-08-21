import { configureStore } from "@reduxjs/toolkit";
import rootPersist from "./persist/rootPersist";
import authPersist from "./persist/authPersist";

const store = configureStore({
  reducer: {
    rootPersist,
    authPersist,
  },
});

export default store;
