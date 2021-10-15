import React from "react";
import { Button, ListGroupItem, Label, CheckBox } from "./Elements";
import { Todo } from "./types/Todo";

interface Props {
  index: number;
  todo: Todo;
  changeCheck: () => void;
  removeClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TodoItem: React.FC<Props> = (props) => {
  const { index, todo, changeCheck, removeClick } = props;
  return (
    <ListGroupItem>
      <Label htmlFor={`todo_${index}`}>
        <CheckBox
          id={`todo_${index}`}
          type="checkbox"
          checked={todo.done}
          onChange={changeCheck}
        />
        {todo.title}
      </Label>
      <Button onClick={removeClick}>🗑</Button>
    </ListGroupItem>
  );
};

export default TodoItem;
