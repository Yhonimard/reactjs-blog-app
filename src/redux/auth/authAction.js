import api from "../../api";
import { redirect, useNavigate } from "react-router-dom";

const authRequest = () => {
  const register = (userData) => {
    return async (dispatch) => {
      const { username, confirmPassword } = userData;

      const data = {
        username,
        password: confirmPassword,
      };

      try {
        const res = await api.request.post(`/auth/register`, data);
        console.log(res);
        return redirect("?mode=login");
      } catch (error) {
        throw new Error(error.message);
      }
    };
  };

  return {
    register,
  };
};
export default authRequest;
