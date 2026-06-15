import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "../../modules/auth/pages/LoginPage";
import RegisterPage from "../../modules/auth/pages/RegisterPage";
import DashboardPage from "../../modules/dashboard/pages/DashboardPage";

import ProtectedRoute from "./ProtectedRoutes";
import PublicRoute from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />
        <Route element={<PublicRoute />}>
          <Route
            path="/login"
            element={<LoginPage />}
          />

          <Route
            path="/register"
            element={<RegisterPage />}
          />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};