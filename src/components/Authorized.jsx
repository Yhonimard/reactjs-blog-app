import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const Authorized = ({ children }) => {
  const { isAuthorized } = useSelector((state) => state.auth.data);
  const isAuthLocation = useLocation().pathname == "/auth";

  return (
    <>
      {isAuthLocation && isAuthorized ? (
        <Navigate to="/" />
      ) : (
        <div>{children}</div>
      )}

      {/* {!isAuthLocation && !isAuthorized ? (
        { children }
      ) : (
        <Navigate to="/auth" />
      )} */}
    </>
  );
};

export default Authorized;
