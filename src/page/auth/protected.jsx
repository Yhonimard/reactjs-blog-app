import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Protected = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth.data);
  const isAuthLocation = useLocation().pathname == "/auth";

  return (
    <>
      {isAuthLocation && isAuthenticated ? <Navigate to={"/"} /> : { children }}
      {!isAuthLocation && !isAuthenticated ? { children } : <Navigate to="/" />}
    </>
  );
};

export default Protected;
