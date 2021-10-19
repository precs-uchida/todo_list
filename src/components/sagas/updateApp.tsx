import { fork, takeEvery, select } from "redux-saga/effects";
import { Todo } from "../types/Todo";

const updateSagas = [fork(watchUpdateTodo)];

// ローカルストレージにTodoを保存
function* save_storage() {
  const { todos }: { todos: Todo[] } = yield select((state) => state);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function* watchUpdateTodo() {
  yield takeEvery("ADD_TODO", save_storage);
  yield takeEvery("SWITCH_DONE", save_storage);
  yield takeEvery("REMOVE_TODO", save_storage);
}

export default updateSagas;
