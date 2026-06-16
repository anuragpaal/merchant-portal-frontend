import { apiClient } from "../../../shared/services/apiClient";

import { API_ROUTES } from "../../../shared/constants/api-routes.constants";
import type { LoginRequest } from "../types/login.types";
import type { RegisterRequest } from "../types/register.types";

export const authService = {
  login: async (payload: LoginRequest) => {
    const response = await apiClient.post(
      `${API_ROUTES.AUTH.LOGIN}`,
      payload
    );

    return response.data;
  },

  register: async (
    payload: RegisterRequest
  ) => {
    const response = await apiClient.post(
      `${API_ROUTES.AUTH.REGISTER}`,
      payload
    );

    return response.data;
  },
  
};