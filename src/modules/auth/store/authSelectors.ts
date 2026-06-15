import type { RootState } from "../../../app/store/rootReducer";

export const selectUser = (
  state: RootState
) => state.auth.user;

export const selectAccessToken = (
  state: RootState
) => state.auth.accessToken;

export const selectIsAuthenticated = (
  state: RootState
) => state.auth.isAuthenticated;

export const selectAuthLoading = (
  state: RootState
) => state.auth.loading;

export const selectAuthError = (
  state: RootState
) => state.auth.error;