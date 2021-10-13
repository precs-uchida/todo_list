import React from "react";

interface Props {
  todo: string;
  removeClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

class TodoItem extends React.Component<Props> {
  render() {
    const { todo, removeClick } = this.props;
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
  }
}

export default TodoItem;
