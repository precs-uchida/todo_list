import { Todo } from "../types/Todo";
import { ActionNames } from "../actions/AppAction";

interface State {
  todos: Todo[];
  input_todo_text: string;
}

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
const reducer = (state: State = initialState, action: any) => {
  switch (action.type) {
    // 追加処理
    case ActionNames.addTodo: {
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
    case ActionNames.removeTodo: {
      let new_todos: Todo[] = [...state.todos];
      new_todos.splice(action.payload, 1);
      save_storage(new_todos);
      return { todos: new_todos, input_todo_text: state.input_todo_text };
    }
    // チェック処理
    case ActionNames.switchDone: {
      let new_todos = [...state.todos];
      new_todos[action.payload].done = !new_todos[action.payload].done;
      save_storage(new_todos);
      return { todos: new_todos, input_todo_text: state.input_todo_text };
    }
    // テキスト変更処理
    case ActionNames.changeText:
      return { todos: state.todos, input_todo_text: action.payload };
    default: {
      return state;
    }
  }
};

export default reducer;
