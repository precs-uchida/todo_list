import { fork, put, takeEvery } from "redux-saga/effects";
import { Todo } from "../types/Todo";

const initSagas = [fork(initTodos)];

function* getTodos() {
  // 前回todosデータ取得
  const strage_todo_data: string | null = localStorage.getItem("todos");
  const last_time_todos: Todo[] = strage_todo_data
    ? JSON.parse(strage_todo_data)
    : [];
  // todosをセット
  yield put({ type: "SET_TODOS", payload: last_time_todos });
}

function* initTodos() {
  yield takeEvery("INIT", getTodos);
}

export default initSagas;
