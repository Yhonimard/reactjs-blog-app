import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authState from "../auth/auth.state";

const persistedReducer = persistReducer(
  {
    key: "auth",
    storage,
    whitelist: ["data"],
  },
  authState.reducer
);

export default persistedReducer;
