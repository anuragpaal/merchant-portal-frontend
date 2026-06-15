import {
  takeLatest,
  put,
  delay,
} from "redux-saga/effects";

import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutRequest,
} from "./authSlice";

function* loginWorker(
  action: ReturnType<
    typeof loginRequest
  >
) {
  try {
    yield delay(1000);

    yield put(
      loginSuccess({
        user: {
          id: 1,
          name: "Anu",
          email:
            action.payload.email,
        },
        accessToken:
          "mock-token",
      })
    );
  } catch {
    yield put(
      loginFailure(
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

export default function* authSaga() {
  yield takeLatest(
    loginRequest.type,
    loginWorker
  );
  yield takeLatest(
  logoutRequest.type,
  logoutWorker
);
}