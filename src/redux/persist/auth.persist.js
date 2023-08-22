import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../auth/auth.state";

const authPersist = persistReducer(
  {
    key: "auth",
    storage,
    whitelist: ["data"],
  },
  authReducer.reducer
);

export default authPersist;
