export const API_ROUTES = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh-token",
  },

  TRANSACTIONS: {
    GET_ALL: "/transactions",
  },

  PROFILE: {
    GET: "/profile",
    UPDATE: "/profile",
  },
} as const;