import React from "react";
import TodoItem from "./TodoItem";

interface Props {
  todos: string[];
  removeClick: CallableFunction;
}

const TodoList: React.FC<Props> = (props) => {
  const { todos, removeClick } = props;

  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          removeClick={() => removeClick(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
