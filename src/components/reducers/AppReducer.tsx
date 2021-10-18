import { Todo } from "../types/Todo";
import { ActionType } from "../actions/AppAction";

interface State {
  todos: Todo[];
  input_todo_text: string;
}

interface BaseAction {
  type: ActionType;
}

export interface AddAction extends BaseAction {
  type: "ADD_TODO";
  payload: string;
}

export interface RemoveAction extends BaseAction {
  type: "REMOVE_TODO";
  payload: number;
}

export interface SwitchDoneAction extends BaseAction {
  type: "SWITCH_DONE";
  payload: number;
}

export interface ChangeTextAction extends BaseAction {
  type: "CHANGE_TEXT";
  payload: string;
}

type Actions = AddAction | RemoveAction | SwitchDoneAction | ChangeTextAction;

// 前回todosデータ
const strage_todo_data: string | null = localStorage.getItem("todos");
const last_time_todos: Todo[] = strage_todo_data
  ? JSON.parse(strage_todo_data)
  : [];

// 初期値
const initialState: State = {
  todos: last_time_todos,
  input_todo_text: "",
};

// ローカルストレージにTodoを保存
const save_storage = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Reducer処理
const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    // 追加処理
    case "ADD_TODO": {
      let new_todos: Todo[] = [...state.todos];
      const add_todo: Todo = {
        title: action.payload,
        done: false,
      };
      new_todos.push(add_todo);
      save_storage(new_todos);
      return { todos: new_todos, input_todo_text: "" };
    }
    // 削除処理
    case "REMOVE_TODO": {
      let new_todos: Todo[] = [...state.todos];
      new_todos.splice(action.payload, 1);
      save_storage(new_todos);
      return { todos: new_todos, input_todo_text: state.input_todo_text };
    }
    // チェック処理
    case "SWITCH_DONE": {
      let new_todos = [...state.todos];
      new_todos[action.payload].done = !new_todos[action.payload].done;
      save_storage(new_todos);
      return { todos: new_todos, input_todo_text: state.input_todo_text };
    }
    // テキスト変更処理
    case "CHANGE_TEXT":
      return { todos: state.todos, input_todo_text: action.payload };
    default: {
      return state;
    }
  }
};

export default reducer;
