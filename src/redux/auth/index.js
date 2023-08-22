import request from "./auth.thunks";
import authReducer from "./auth.state";
const action = authReducer.actions;

export default {
  request,
  action,
};
