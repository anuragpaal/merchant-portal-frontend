import {
  takeLatest,
  put,
  delay,
} from "redux-saga/effects";

import {
  loginRequest,
  loginSuccess,
  loginFailure,
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

export default function* authSaga() {
  yield takeLatest(
    loginRequest.type,
    loginWorker
  );
}