import React from "react";
import { FormGroup, ListGroup, ListGroupItem } from "./Elements";
import { Todo } from "./types/Todo";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  handleRemoveTodo: (index: number) => void;
  handleSwitchDone: (index: number) => void;
}

const TodoList: React.FC<Props> = (props) => {
  const { todos, handleRemoveTodo, handleSwitchDone } = props;

  return (
    <FormGroup>
      <div>
        <ListGroup>
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                todo={todo}
                changeCheck={() => handleSwitchDone(index)}
                removeClick={() => handleRemoveTodo(index)}
              />
            ))
          ) : (
            <ListGroupItem>追加してください</ListGroupItem>
          )}
        </ListGroup>
      </div>
    </FormGroup>
  );
};

export default TodoList;
