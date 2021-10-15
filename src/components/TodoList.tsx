import React from "react";
import { FormGroup, ListGroup, ListGroupItem } from "./Elements";
import { Todo } from "./types/Todo";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  removeClick: (index: number) => void;
  changeCheck: (index: number) => void;
}

const TodoList: React.FC<Props> = (props) => {
  const { todos, changeCheck, removeClick } = props;

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
                changeCheck={() => changeCheck(index)}
                removeClick={() => removeClick(index)}
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
