import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../auth/authReducer";

const authPersist = persistReducer(
  {
    key: "auth",
    storage,
  },
  authReducer.reducer
);

export default authPersist;
