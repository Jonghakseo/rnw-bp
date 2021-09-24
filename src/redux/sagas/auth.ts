import { all, call, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { authActions } from "../slices/auth";
import { mockAPI } from "../../apis/mock";

export function* requestToken() {
  try {
    const mock: SagaReturnType<typeof mockAPI> = yield call(mockAPI, "params");
    yield put(authActions.setToken(mock.data));
  } catch (e) {
    yield put(authActions.resetToken());
  }
}

export default function* root() {
  yield all([takeLatest(authActions.getToken, requestToken)]);
}
