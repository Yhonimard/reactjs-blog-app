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

  const login = (data) => {
    return async () => {
      try {
        await api.request.post("/auth/login", data).catch((error) => {
          console.log(error);
        });
      } catch (error) {
        console.log(error);
      }
    };
  };

  return {
    register,
    login,
  };
};
export default authRequest;
