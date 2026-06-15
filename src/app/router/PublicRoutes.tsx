import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "../../shared/hooks/useAppSelector";
import { selectIsAuthenticated } from "../../modules/auth/store/authSelectors";

const PublicRoute = () => {
  const isAuthenticated =
    useAppSelector(selectIsAuthenticated);

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to="/dashboard"
      replace
    />
  );
};

export default PublicRoute;