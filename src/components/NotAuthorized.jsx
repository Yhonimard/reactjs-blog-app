import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const NotAuthorized = () => {
  const { isAuthorized } = useSelector((state) => state.auth.data);
  const isAuthLocation = useLocation().pathname == "/auth";

  return (
    <>
      {!isAuthLocation && !isAuthorized ? (
        <Navigate to="/auth?mode=login" />
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default NotAuthorized;
