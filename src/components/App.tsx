import React from "react";
import AddForm from "./AddForm";
import TodoList from "./TodoList";

interface AppState {
  input_todo_text: string;
  todos: string[];
}

class App extends React.Component<{}, AppState> {
  // 前回todosデータ
  strage_todo_data: string | null = localStorage.getItem("todos");
  last_time_todos: string[] = this.strage_todo_data
    ? JSON.parse(this.strage_todo_data)
    : [];

  state: AppState = {
    input_todo_text: "",
    todos: this.last_time_todos,
  };

  componentDidUpdate(prevProps) {
    if (this.state.todos != prevProps.todos) {
      // todoが更新されたらlocalStorageへセット
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  // todoテキストボックス値変更処理
  changeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      input_todo_text: e.target.value,
    });
  };

  // 追加ボタン処理
  addClick = () => {
    if (!this.state.input_todo_text) {
      alert("todoを入力してください");
      return;
    }
    let new_todos: string[] = [...this.state.todos];
    new_todos.push(this.state.input_todo_text);
    this.setState({
      todos: new_todos,
      input_todo_text: "",
    });
  };
  // 削除ボタン処理
  removeClick = (index: number) => {
    let new_todos: string[] = [...this.state.todos];
    new_todos.splice(index, 1);
    this.setState({
      todos: new_todos,
    });
  };

  render() {
    const { input_todo_text, todos } = this.state;
    return (
      <div className="container pt-3">
        <h1>TODOリスト</h1>
        <div>
          <AddForm
            input_todo_text={input_todo_text}
            changeText={this.changeText}
            addClick={this.addClick}
          />
        </div>
        <div className="mt-2">
          <TodoList todos={todos} removeClick={this.removeClick} />
        </div>
      </div>
    );
  }
}

export default App;
