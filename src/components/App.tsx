import React from "react";
import { Wapper, Border } from "./Elements";
import AddForm from "./containers/AddFormContainer";
import TodoList from "./containers/TodoListContainer";

const App: React.FC = () => {
  return (
    <Wapper>
      <AddForm />
      <Border />
      <TodoList />
    </Wapper>
  );
};

export default App;
