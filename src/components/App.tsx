import React from "react";
import AddForm from "./AddForm";
import TodoList from "./TodoList";

const App: React.FC = () => {
  // todoテキストボックス
  const [input_todo_text, setInputTodoText] = React.useState<string>("");
  // todoリスト
  const [todos, setTodos] = React.useState<string[]>([]);

  // todoテキストボックス値変更処理
  const changeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputTodoText(event.target.value);
  };

  // 追加ボタン処理
  const addClick = () => {
    if (!input_todo_text) {
      alert("todoを入力してください");
      return;
    }
    let new_todos: string[] = [...todos];
    new_todos.push(input_todo_text);
    setTodos(new_todos);
    setInputTodoText("");
  };
  // 削除ボタン処理
  const removeClick = (index: number) => {
    let new_todos: string[] = [...todos];
    new_todos.splice(index, 1);
    setTodos(new_todos);
  };
  return (
    <div className="container pt-3">
      <h1>TODOリスト</h1>
      <div>
        <AddForm
          input_todo_text={input_todo_text}
          changeText={changeText}
          addClick={addClick}
        />
      </div>
      <div className="mt-2">
        <TodoList todos={todos} removeClick={removeClick} />
      </div>
    </div>
  );
};

export default App;
