import { BrowserRouter, Routes } from "react-router-dom";

import { PublicRoutes } from "./PublicRoutes";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes()}
        {ProtectedRoutes()}
      </Routes>
    </BrowserRouter>
  );
};