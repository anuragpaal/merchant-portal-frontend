import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { selectIsAuthenticated } from "../../modules/auth/store/authSelectors";

const ProtectedRoute = () => {
  const isAuthenticated =
    useAppSelector(selectIsAuthenticated);

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      replace
    />
  );
};

export default ProtectedRoute;