import React from "react";
import { Wapper, Border } from "./Elements";
import AddForm from "./AddForm";
import TodoList from "./TodoList";
import { Todo } from "./types/Todo";

const App: React.FC = () => {
  // 前回todosデータ
  const strage_todo_data: string | null = localStorage.getItem("todos");
  const last_time_todos: Todo[] = strage_todo_data
    ? JSON.parse(strage_todo_data)
    : [];

  // todoテキストボックス
  const [input_todo_text, setInputTodoText] = React.useState<string>("");
  // todoリスト
  const [todos, setTodos] = React.useState<Todo[]>(last_time_todos);

  React.useEffect(() => {
    // todoが更新されたらlocalStorageへセット
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // todoテキストボックス値変更処理
  const changeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputTodoText(event.target.value);
  };

  // todoチェックボックス値変更処理
  const changeCheck = (index: number): void => {
    let new_todos = [...todos];
    new_todos[index].done = !new_todos[index].done;
    setTodos(new_todos);
  };

  // 追加ボタン処理
  const addClick = () => {
    if (!input_todo_text) {
      alert("todoを入力してください");
      return;
    }
    const add_todo: Todo = {
      title: input_todo_text,
      done: false,
    };
    let new_todos: Todo[] = [...todos];
    new_todos.push(add_todo);
    setTodos(new_todos);
    setInputTodoText("");
  };
  // 削除ボタン処理
  const removeClick = (index: number) => {
    let new_todos: Todo[] = [...todos];
    new_todos.splice(index, 1);
    setTodos(new_todos);
  };
  return (
    <Wapper>
      <AddForm
        input_todo_text={input_todo_text}
        changeText={changeText}
        addClick={addClick}
      />
      <Border />
      <TodoList
        todos={todos}
        changeCheck={changeCheck}
        removeClick={removeClick}
      />
    </Wapper>
  );
};

export default App;
