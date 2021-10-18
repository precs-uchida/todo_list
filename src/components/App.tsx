import React from "react";
import { Wapper, Border } from "./Elements";
import AddForm from "./AddForm";
import TodoList from "./TodoList";
import { Todo } from "./types/Todo";

interface Props {
  input_todo_text: string;
  todos: Todo[];
  handleAddTodo: (value: string) => void;
  handleRemoveTodo: (value: number) => void;
  handleSwitchDone: (value: number) => void;
  handleChangeText: (value: string) => void;
}

const App: React.FC<Props> = (props: Props) => {
  const {
    input_todo_text,
    todos,
    handleAddTodo,
    handleRemoveTodo,
    handleSwitchDone,
    handleChangeText,
  } = props;

  // todoテキストボックス値変更処理
  const changeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleChangeText(event.target.value);
  };

  // todoチェックボックス値変更処理
  const changeCheck = (index: number): void => {
    handleSwitchDone(index);
  };

  // 追加ボタン処理
  const addClick = () => {
    if (!input_todo_text) {
      alert("todoを入力してください");
      return;
    }
    handleAddTodo(input_todo_text);
  };
  // 削除ボタン処理
  const removeClick = (index: number) => {
    handleRemoveTodo(index);
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
