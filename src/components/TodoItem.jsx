import React from 'react';

const TodoItem = (props) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span>{props.todo}</span>
            <button onClick={props.removeClick} className="btn btn-sm btn-outline-danger ms-2">削除</button>
        </li>
    );
}

export default TodoItem;