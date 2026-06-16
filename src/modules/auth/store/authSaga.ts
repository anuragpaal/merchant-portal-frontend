import {
  takeLatest,
  put,
  call,
  delay,
} from "redux-saga/effects";

import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutRequest,
  registerFailure,
  registerSuccess,
  registerRequest,
} from "./authSlice";

import { authService } from "../services/auth.service";

function* loginWorker(
  action: ReturnType<
    typeof loginRequest
  >
) {
  try {
    const response: {
      data: {
        user: {
          id: number;
          name: string;
          email: string;
          mobile: string;
        };
        accessToken: string;
      };
    } = yield call(
      authService.login,
      action.payload
    );

    yield put(
      loginSuccess({
        user: response.data.user,
        accessToken:
          response.data.accessToken,
      })
    );
  } catch (error: any) {
    yield put(
      loginFailure(
        error?.response?.data
          ?.message ||
        "Login Failed"
      )
    );
  }
}

function* logoutWorker() {
  try {
    yield delay(500);

    yield put(logoutSuccess());
  } catch (error) {
    yield put(loginFailure("Logout Failed"));
  }
}

function* registerWorker(
  action: any
) {
  try {
    yield call(() =>
      authService.register(
        action.payload
      )
    );

    yield put(registerSuccess());
  } catch (error: any) {
    yield put(
      registerFailure(
        error?.response?.data?.message ||
        "Register Failed"
      )
    );
  }
}

export default function* authSaga() {
  yield takeLatest(
    loginRequest.type,
    loginWorker
  );
  yield takeLatest(
    logoutRequest.type,
    logoutWorker
  );
  yield takeLatest(
    registerRequest.type,
    registerWorker
  );
}