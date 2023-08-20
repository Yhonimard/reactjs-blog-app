import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducers = combineReducers({});

const rootPersist = persistReducer(
  {
    key: "root",
    storage,
  },
  rootReducers
);

export default rootPersist;
