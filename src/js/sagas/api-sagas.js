//  src/js/sagas/api-sagas.js
import { takeEvery, call, put } from "redux-saga/effects";
export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
  yield takeEvery("USERS_REQUESTED", workerUsersSaga);
}
function* workerSaga(action) {
  try {
    const payload = yield call(getData, action.payload);
    yield put({ type: "DATA_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}
function* workerUsersSaga() {
  try {
    const payload = yield call(getUsers);
    yield put({ type: "USERS_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}
function getData(data) {
  console.log("clicou: " + data);
  return fetch("https://jsonplaceholder.typicode.com/posts?userId="+ data.id ).then(response =>
    response.json()
  );
}
function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(response =>
    response.json()
  );
}