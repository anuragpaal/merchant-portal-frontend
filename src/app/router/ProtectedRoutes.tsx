import { Route } from "react-router-dom";

import DashboardPage from "../../modules/dashboard/pages/DashboardPage";

export const ProtectedRoutes = () => {
  return (
    <>
      <Route path="/" element={<DashboardPage />} />
    </>
  );
};