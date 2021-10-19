import React from "react";
import { Wapper, Border } from "./Elements";
import AddForm from "./containers/AddFormContainer";
import TodoList from "./containers/TodoListContainer";

export interface AppProps {
  init: () => void;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  // 初期化処理
  props.init();
  return (
    <Wapper>
      <AddForm />
      <Border />
      <TodoList />
    </Wapper>
  );
};

export default App;
