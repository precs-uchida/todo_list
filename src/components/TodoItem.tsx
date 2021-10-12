import React, { MouseEventHandler } from "react";

interface Props {
  todo: string;
  removeClick: MouseEventHandler;
}

const TodoItem: React.FC<Props> = (props) => {
  const { todo, removeClick } = props;
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>{todo}</span>
      <button
        onClick={removeClick}
        className="btn btn-sm btn-outline-danger ms-2"
      >
        削除
      </button>
    </li>
  );
};

export default TodoItem;
