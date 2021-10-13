import React from "react";
import TodoItem from "./TodoItem";

interface Props {
  todos: string[];
  removeClick: (index: number) => void;
}

class TodoList extends React.Component<Props> {
  render() {
    const { todos, removeClick } = this.props;
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
  }
}

export default TodoList;
