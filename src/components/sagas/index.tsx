import { all } from "redux-saga/effects";
import initSagas from "./initApp";
import updateSagas from "./updateApp";

export default function* rootSaga() {
  yield all([...initSagas, ...updateSagas]);
}
