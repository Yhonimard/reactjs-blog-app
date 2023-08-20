import { configureStore } from "@reduxjs/toolkit";
import rootPersist from "./persist/rootPersist";

const store = configureStore({
  reducer: {
    rootPersist,
  },
});

export default store;
