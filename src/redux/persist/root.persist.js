import { combineReducers } from "@reduxjs/toolkit";
import global from "../global";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducers = combineReducers({
  global: global.reducer,
});

const rootPersist = persistReducer(
  {
    key: "root",
    storage,
    blacklist: ["global"],
  },
  rootReducers
);

export default rootPersist;
