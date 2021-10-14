import React from "react";
import { Button, TodoTr, TodoTd, Label, CheckBox } from "./Elements";

interface Props {
  index: number;
  todo: string;
  removeClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TodoItem: React.FC<Props> = (props) => {
  const { index, todo, removeClick } = props;
  return (
    <TodoTr>
      <TodoTd width="10">
        <CheckBox id={`todo_${index}`} type="checkbox" />
      </TodoTd>
      <TodoTd>
        <Label htmlFor={`todo_${index}`}>{todo}</Label>
      </TodoTd>
      <TodoTd width="10">
        <Button onClick={removeClick}>🗑</Button>
      </TodoTd>
    </TodoTr>
  );
};

export default TodoItem;
